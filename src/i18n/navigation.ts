const arabicLabels: Record<string, string> = {
  Services: "الخدمات", Consultancy: "الاستشارات", "AI Automation": "أتمتة الذكاء الاصطناعي",
  "Case Studies": "دراسات الحالة", Process: "منهجية العمل", "Engagement Models": "نماذج التعاون",
  About: "من نحن", Contact: "تواصل معنا", "Book a Demo": "احجز عرضاً توضيحياً",
  Blockchain: "البلوك تشين", Design: "التصميم", Development: "التطوير",
  "Digital Transformation": "التحول الرقمي", "Internet of Things": "إنترنت الأشياء",
  "IT Project Management": "إدارة مشاريع تقنية المعلومات", "IT Consultation": "استشارات تقنية المعلومات",
  "IT Outsourcing Consultancy": "استشارات التعهيد التقني", "Managed IT Services Consultancy": "استشارات خدمات تقنية المعلومات المُدارة",
  "Design Consultancy": "استشارات التصميم", "AI & Data Strategy Consulting": "استشارات استراتيجية الذكاء الاصطناعي والبيانات",
  "Digital Transformation Consulting": "استشارات التحول الرقمي", "Product Strategy Consulting": "استشارات استراتيجية المنتج",
  "Tech Strategy Consulting": "استشارات الاستراتيجية التقنية", "DevOps Consulting": "استشارات DevOps",
  "Microservices Consulting": "استشارات الخدمات المصغرة", "IoT Consultancy": "استشارات إنترنت الأشياء",
  "Business Intelligence Consulting": "استشارات ذكاء الأعمال"
};

export function localizeNavigationLabel(label: string, locale: string) {
  return locale === "ar" ? arabicLabels[label] ?? label : label;
}
