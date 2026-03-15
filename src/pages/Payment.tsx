import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CreditCard, Building2, Copy, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const bankDetails = [
  { label: "Bank Name", value: "Opay" },
  { label: "Account Name", value: "Akinjobi Abdulrahmon" },
];

const WHATSAPP_LINK = "https://wa.me/message/YOUR_WHATSAPP_NUMBER";
const PAYSTACK_LINK = "https://paystack.shop/pay/arresalahinstitute";

const Payment = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <Layout>
      <section className="bg-secondary section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl text-secondary-foreground mb-4">Make Payment</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose your preferred payment method to complete your enrollment.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paystack */}
            <div className="bg-card rounded-lg border border-border p-8 text-center flex flex-col shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 mx-auto">
                <CreditCard className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pay with Paystack</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Pay securely using your debit card, bank transfer, or USSD via Paystack. Fast, reliable, and secure.
              </p>
              <a href={PAYSTACK_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Pay Now with Paystack
                </Button>
              </a>
            </div>

            {/* Bank Transfer */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 mx-auto">
                <Building2 className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Bank Transfer (Opay)</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Transfer directly to our Opay account and send proof of payment via WhatsApp.
              </p>
              <div className="space-y-4 flex-1">
                {bankDetails.map((d) => (
                  <div key={d.label} className="flex items-center justify-between bg-background rounded-md p-3 border border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">{d.label}</p>
                      <p className="font-medium text-sm">{d.value}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(d.value)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button className="w-full bg-[hsl(142,70%,40%)] text-white hover:bg-[hsl(142,70%,35%)] font-semibold gap-2">
                  <MessageCircle size={18} /> Send Proof via WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 text-center bg-card rounded-lg border border-border p-6 shadow-sm">
            <p className="text-muted-foreground mb-3">Need help or have questions about payment?</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-accent text-accent hover:bg-accent/10">
                <MessageCircle size={18} /> Chat with us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
