import Button from '../../components/ui/Button';

/**
 * Browser-printable record of completing the optional Program Readiness plan.
 * This is a student-generated participation/completion record, not an official
 * CCC credential, academic credit, admission decision, or professional license.
 */
export default function ReadinessCompletionCertificate({ name, departmentName, completedAt, lang = 'en' }) {
  const isFil = lang === 'fil';
  const dateLabel = new Date(completedAt).toLocaleDateString(isFil ? 'fil-PH' : 'en-PH', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <section className="rounded-2xl border border-sky/30 bg-white p-6 shadow-1">
      <h2 className="font-display text-h3 font-bold text-navy">
        {isFil ? 'Kumpletong Gabay sa Kahandaan' : 'Program Readiness Completion'}
      </h2>
      <p className="mt-2 text-small text-gray-dark">
        {isFil
          ? 'Natapos mo ang mga nakatalagang hakbang sa gabay sa kahandaan. Maaari mong i-print ang iyong personal na tala ng pagkumpleto.'
          : 'You have completed the required activities in this readiness guide. You can print your personal completion record.'}
      </p>
      <div className="print-certificate mt-5 rounded-xl border-2 border-navy/20 p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-ink">CCC PathFinder</p>
        <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">
          {isFil ? 'TALA NG PAGKUMPLETO' : 'CERTIFICATE OF COMPLETION'}
        </h3>
        <p className="mt-5 text-sm text-gray-dark">
          {isFil ? 'Ipinagkakaloob kay' : 'This record is presented to'}
        </p>
        <p className="mt-2 border-b border-navy/30 pb-3 font-display text-2xl font-bold text-navy">{name || (isFil ? 'Mag-aaral' : 'Student')}</p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-dark">
          {isFil
            ? 'bilang pagkilala sa pagkumpleto ng mga gawain sa Program Readiness para sa:'
            : 'for completing the learning activities in the Program Readiness guide for:'}
        </p>
        <p className="mt-2 text-lg font-bold text-navy">{departmentName}</p>
        <p className="mt-6 text-sm text-gray-dark">{dateLabel}</p>
        <p className="mt-6 border-t border-navy/10 pt-4 text-xs leading-relaxed text-gray-dark">
          {isFil
            ? 'Personal na tala lamang na ginawa ng mag-aaral. Hindi ito opisyal na sertipikasyon, akademikong kredito, garantiya ng admission, o propesyonal na kwalipikasyon mula sa City College of Calamba.'
            : 'Student-generated record only. This is not an official City College of Calamba certification, academic credit, admission guarantee, or professional qualification.'}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 print:hidden">
        <Button onClick={() => window.print()}>
          {isFil ? 'I-print ang Tala' : 'Print Completion Record'}
        </Button>
      </div>
    </section>
  );
}
