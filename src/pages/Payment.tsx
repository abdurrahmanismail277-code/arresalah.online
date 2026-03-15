import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CreditCard, Building2, Copy } from "lucide-react";
import { toast } from "sonner";

const bankDetails = [
  { label: "Bank Name", value: "Jaiz Bank" },
  { label: "Account Name", value: "Arresalah International Madrasah" },
  { label: "Account Number", value: "0012345678" },
];

const Payment = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <Layout>
      <section className="bg-brown-dark section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Make Payment</h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            Choose your preferred payment method to complete your enrollment.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paystack */}
            <div className="bg-card rounded-lg border border-border p-8 text-center flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                <CreditCard className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pay with Paystack</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Pay securely using your debit card, bank transfer, or USSD via Paystack. Fast, reliable, and secure.
              </p>
              <Button className="w-full bg-gold text-brown-dark hover:bg-gold/90 font-semibold">
                Pay Now with Paystack
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Paystack integration coming soon. Contact us to make payment.
              </p>
            </div>

            {/* Bank Transfer */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                <Building2 className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Bank Transfer</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Transfer directly to our bank account and send proof of payment via WhatsApp or email.
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
              <p className="text-xs text-muted-foreground mt-4 text-center">
                After payment, send proof to our WhatsApp or email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
