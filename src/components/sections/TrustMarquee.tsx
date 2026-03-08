"use client";

const TRUST_ITEMS = [
    "Australian Financial Services Licence",
    "FCA Regulated",
    "ASIC Compliant",
    "ISO 27001 Certified",
    "Big Four Audited",
    "FATCA Reporting",
    "CRS Compliant",
    "Member — Private Wealth Association",
];

export function TrustMarquee() {
    const items = [...TRUST_ITEMS, ...TRUST_ITEMS];

    return (
        <div className="overflow-hidden py-6 bg-forest border-y border-copper/10">
            <div className="trust-marquee-scroll flex whitespace-nowrap">
                {items.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mx-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper/50 shrink-0" />
                        <span className="text-sm text-sage tracking-widest uppercase">
                            {item}
                        </span>
                    </span>
                ))}
            </div>

            <style jsx>{`
        .trust-marquee-scroll {
          animation: marquee-scroll 35s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
