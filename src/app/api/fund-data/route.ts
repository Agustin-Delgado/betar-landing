import { NextResponse } from 'next/server';
import axios from 'axios';
import { load } from 'cheerio';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const { data } = await axios.get('https://www.gofundme.com/f/betar-fund');
    const $ = load(data);

    const title = $('h1.p-campaign-title').text().trim();
    const amountRaised = $('.progress-meter_progressBarHeading__Nxc77 span')
      .first()
      .text()
      .trim();
    const currency = $('.progress-meter_progressBarHeading__Nxc77 span')
      .last()
      .text()
      .trim();

    const goalAndDonationsText = $('.progress-meter_circleGoalDonations__5gSh1').text().trim();
    const [_, donations] = goalAndDonationsText.split('·').map((text) => text.trim());

    const imageUrl = $('img[alt="Main fundraiser photo"]').attr('src') || '';
    const donationUrl = 'https://www.gofundme.com/f/betar-fund/donate?source=btn_donate';

    return NextResponse.json({
      title,
      amountRaised,
      currency,
      goal: 500000,
      donations,
      imageUrl,
      donationUrl,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch GoFundMe data' }, { status: 500 });
  }
}
