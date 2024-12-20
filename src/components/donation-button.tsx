import { Button } from "@/components/ui/button";
import React from 'react';

interface DonationButtonProps {
  title: string;
  amountRaised: string;
  goal: number;
  donations: string;
  donationUrl: string;
  className?: string;
}

const DonationButton: React.FC<DonationButtonProps> = ({ title, amountRaised, donations, donationUrl }) => {
  return (
    <Button
      className="border flex flex-col gap-0 items-start py-0 border-foreground hover:border-primary bg-background text-foreground font-bold h-10 sm:h-12 px-4 text-sm hover:text-primary hover:bg-background group"
      onClick={() => window.open(donationUrl, '_blank')}

    >
      {title}
      <span className="text-xs font-normal"><strong>{amountRaised} raised</strong> - {donations}</span>
    </Button>
  );
};

export default DonationButton;

