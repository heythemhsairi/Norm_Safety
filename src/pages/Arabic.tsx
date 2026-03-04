import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'

const pillars = [
  {
    title: 'رفاهية الإنسان',
    description: 'الإنسان في قلب كل قرار',
    color: 'blue' as const,
  },
  {
    title: 'البيانات والرؤى',
    description: 'تحويل الإشارات العاطفية إلى ذكاء',
    color: 'green' as const,
  },
  {
    title: 'الأمان والخصوصية',
    description: 'ثقة مطلقة في السرية',
    color: 'purple' as const,
  },
  {
    title: 'التأثير القابل للقياس',
    description: 'نتائج ملموسة للمؤسسة',
    color: 'blue' as const,
  },
]

const gulfReasons = [
  'سوق الرفاهية المؤسسية في المنطقة ينمو بشكل متسارع',
  'توافق ثقافي مع قيم الرعاية والمجتمع المتجذرة في المنطقة',
  'تصميم يضع اللغة العربية في المقام الأول',
  'الامتثال لمتطلبات البيانات والخصوصية الإقليمية',
]

const fontWeights = [
  { label: 'خفيف', weight: 300, sample: 'وجدان سبير — الخفيف' },
  { label: 'عادي', weight: 400, sample: 'وجدان سبير — العادي' },
  { label: 'متوسط', weight: 500, sample: 'وجدان سبير — المتوسط' },
  { label: 'عريض', weight: 600, sample: 'وجدان سبير — العريض' },
  { label: 'ثقيل', weight: 700, sample: 'وجدان سبير — الثقيل' },
]

const colorMap = {
  blue: {
    accent: 'bg-[#2F6BFF]',
    bg: 'bg-primary-light',
    text: 'text-[#2F6BFF]',
  },
  green: {
    accent: 'bg-[#2FBF71]',
    bg: 'bg-green-light',
    text: 'text-[#2FBF71]',
  },
  purple: {
    accent: 'bg-[#7B61FF]',
    bg: 'bg-purple-light',
    text: 'text-[#7B61FF]',
  },
}

export default function Arabic() {
  return (
    <PageTransition className="min-h-screen bg-[#F7F9FC]">
      <div dir="rtl" className="font-arabic">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-6 pt-28 pb-20">
          {/* Breathing Icon */}
          <motion.img
            src="/assets/wejden-spire-icon.svg"
            alt="وجدان سبير"
            className="w-20 h-20 mb-10"
            animate={{ scale: [1.0, 1.02, 1.0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Reveal>
            <h1 className="text-gradient text-6xl md:text-7xl font-bold tracking-tight text-center mb-6">
              وجدان سبير
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-[#1A1D2E]/80 font-light max-w-2xl text-center leading-relaxed mb-8">
              رفع مستوى الرفاهية في بيئة العمل من خلال الذكاء العاطفي والذكاء الاصطناعي
            </p>
          </Reveal>

          {/* Logo display */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-8 mb-4">
              <img
                src="/assets/wejden-spire-logo.svg"
                alt="شعار وجدان سبير"
                className="h-12 md:h-16"
              />
            </div>
          </Reveal>
        </section>

        <SectionDivider label="الرؤية" />

        {/* Vision Section */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] text-center mb-8">
                الرؤية
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Card padding="lg" hover={false} className="text-center">
                <p className="text-lg md:text-xl leading-loose text-[#1A1D2E]/80">
                  وجدان سبير هي منصة الرفاهية العاطفية التي تحول الإشارات المجهولة للموظفين إلى رؤى قابلة للتنفيذ لإدارة الموارد البشرية.
                </p>
              </Card>
            </Reveal>
          </div>
        </section>

        <SectionDivider label="الركائز" />

        {/* Four Pillars Section */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] text-center mb-14">
                الركائز الأربع
              </h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const scheme = colorMap[pillar.color]
                return (
                  <StaggerItem key={pillar.title}>
                    <motion.div
                      className="relative overflow-hidden rounded-2xl bg-white shadow-md h-full"
                      whileHover={{
                        y: -4,
                        boxShadow:
                          '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.03)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <div className={`h-1 w-full ${scheme.accent}`} />
                      <div className="p-6">
                        <div
                          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${scheme.bg} ${scheme.text}`}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-[#1A1D2E] mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-text-muted">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </section>

        <SectionDivider label="السوق" />

        {/* Why the Gulf Section */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] text-center mb-4">
                لماذا الخليج؟
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-[#1A1D2E]/60 text-center max-w-xl mx-auto mb-14">
                المنطقة تقدم فرصة فريدة لمنصة رفاهية مصممة بعناية.
              </p>
            </Reveal>

            <Stagger className="flex flex-col gap-4">
              {gulfReasons.map((reason, index) => (
                <StaggerItem key={reason}>
                  <Card padding="md" className="flex items-center gap-5">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-[#2FBF71] text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-base font-medium text-[#1A1D2E]">
                      {reason}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <SectionDivider label="التصميم" />

        {/* Bilingual Design Section */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] text-center mb-4">
                التصميم ثنائي اللغة
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-[#1A1D2E]/60 text-center max-w-xl mx-auto mb-14">
                نظام تصميم يدعم الاتجاهين بشكل أصيل — من اليمين إلى اليسار ومن اليسار إلى اليمين.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RTL Support */}
              <Reveal>
                <Card padding="lg" hover={false} className="h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-[#2F6BFF]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="17" y1="10" x2="3" y2="10" />
                      <line x1="21" y1="6" x2="3" y2="6" />
                      <line x1="21" y1="14" x2="3" y2="14" />
                      <line x1="17" y1="18" x2="3" y2="18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1D2E] mb-3">
                    دعم الاتجاه من اليمين إلى اليسار
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted mb-4">
                    تم تصميم كل مكون ليتكيف تلقائياً مع اتجاه النص العربي. الشبكات والأيقونات والتخطيطات تنعكس بسلاسة.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-[#2F6BFF] font-medium">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-light">dir="rtl"</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-light">تخطيط معكوس</span>
                  </div>
                </Card>
              </Reveal>

              {/* Arabic Typography */}
              <Reveal delay={0.15}>
                <Card padding="lg" hover={false} className="h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-light text-[#7B61FF]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="4 7 4 4 20 4 20 7" />
                      <line x1="9" y1="20" x2="15" y2="20" />
                      <line x1="12" y1="4" x2="12" y2="20" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1D2E] mb-3">
                    الخط العربي
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted mb-2">
                    IBM Plex Sans Arabic
                  </p>
                  <p className="text-xs text-text-muted mb-4">
                    خط مصمم خصيصاً للقراءة المثلى على الشاشات الرقمية مع دعم كامل للحروف العربية.
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-light text-[#7B61FF] text-sm font-medium">
                    font-family: IBM Plex Sans Arabic
                  </div>
                </Card>
              </Reveal>
            </div>

            {/* Font Weight Examples */}
            <Reveal delay={0.2}>
              <Card padding="lg" hover={false} className="mt-8">
                <h3 className="text-lg font-semibold text-[#1A1D2E] mb-6">
                  أوزان الخط
                </h3>
                <div className="space-y-4">
                  {fontWeights.map((fw) => (
                    <div key={fw.weight} className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0">
                      <span
                        className="text-lg text-[#1A1D2E]"
                        style={{ fontWeight: fw.weight }}
                      >
                        {fw.sample}
                      </span>
                      <span className="text-sm text-text-muted font-mono" dir="ltr">
                        {fw.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Section */}
        <section className="px-6 pb-28">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1D2E] mb-8">
                اكتشف المزيد
              </h2>
              <Button variant="primary" size="lg" href="/">
                العودة إلى الموقع الرئيسي
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  )
}
