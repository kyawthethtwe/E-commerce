import PolicyHero from "@/components/policy/PolicyHero";
import PolicyTabs from '@/components/policy/PolicyTab';
import PolicySupport from "@/components/policy/PolicySupport";

export default function Policy() {
    return (
        <div>
            <PolicyHero />
            <PolicyTabs />
            <PolicySupport />
        </div>
    );
}