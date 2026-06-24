"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { serviceCategories, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  preferredDate: "",
  notes: ""
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");

  const services = useMemo(() => serviceCategories.flatMap((category) => category.services.map((service) => service.title)), []);

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.service.trim()) {
      setError("من فضلك اكتبي الاسم، رقم الهاتف، والخدمة المطلوبة.");
      return;
    }

    const message = [
      "مرحبًا، أريد حجز موعد في عيادة لين",
      `الاسم: ${form.name}`,
      `رقم الهاتف: ${form.phone}`,
      `الخدمة المطلوبة: ${form.service}`,
      `الموعد المناسب: ${form.preferredDate || "غير محدد"}`,
      `ملاحظات: ${form.notes || "لا يوجد"}`
    ].join("\n");

    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur md:p-8">
      <div className="mb-6">
        <p className="text-sm font-black text-orange">حجز سريع عبر واتساب</p>
        <h3 className="mt-2 text-3xl font-black text-wineDark">احجزي استشارتك الآن</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">املئي البيانات وسيتم فتح واتساب برسالة جاهزة للعيادة.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="الاسم بالكامل" />
        <Input value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="رقم الهاتف" inputMode="tel" />
        <Select value={form.service} onChange={(event) => update("service", event.target.value)} className="md:col-span-2">
          <option value="">اختاري الخدمة المطلوبة</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </Select>
        <Input value={form.preferredDate} onChange={(event) => update("preferredDate", event.target.value)} placeholder="الموعد المناسب مثال: الخميس مساءً" className="md:col-span-2" />
        <Textarea value={form.notes} onChange={(event) => update("notes", event.target.value)} placeholder="ملاحظات إضافية اختيارية" className="md:col-span-2" />
      </div>

      {error && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p>}

      <Button type="submit" variant="orange" size="lg" className="mt-6 w-full">
        <Send className="h-5 w-5" />
        إرسال على واتساب
      </Button>
    </form>
  );
}
