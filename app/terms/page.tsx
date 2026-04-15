import type { Metadata } from "next";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
import { EMAIL, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the full Terms and Conditions for R2G Group Pty Ltd (ACN 643 625 003). Applies to all removal, storage, packing and related services.",
  alternates: { canonical: "https://www.r2g.com.au/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions | R2G Transport & Storage",
    description: "Read the full Terms and Conditions for R2G Group Pty Ltd. Applies to all removal, storage, packing and related services.",
    url: "https://www.r2g.com.au/terms",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.r2g.com.au" },
    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://www.r2g.com.au/terms" },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        title="Terms & Conditions"
        subtitle="R2G Group Pty Ltd (ACN 643 625 003). Please read these terms carefully before engaging our services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-[#1A1A1A] prose-a:text-[#F5C400]">

          {/* ── 1. Definitions ── */}
          <h2>1. Definitions</h2>
          <ul>
            <li><strong>&quot;us&quot;, &quot;our&quot; or &quot;we&quot;</strong> means R2G GROUP PTY LTD (ACN 643 625 003).</li>
            <li><strong>&quot;you&quot; or &quot;your&quot;</strong> means the authorised person booking the carriage of goods or similar services to be carried out by us.</li>
            <li><strong>&quot;goods&quot;</strong> means any goods or item which you have requested to be carried or arranged to be carried by us.</li>
          </ul>

          {/* ── 2. Customer Obligation ── */}
          <h2>2. Customer Obligation</h2>
          <ul>
            <li>You have the obligation as a customer to read, acknowledge and understand these terms and conditions before engaging in R2G GROUP PTY LTD Services.</li>
            <li>You warrant that, in entering into this agreement, you are either the owner of the goods or the authorised agent of the owner of the goods.</li>
            <li>You agree that once a job has been accepted these terms and conditions will apply without the need of it being signed.</li>
            <li>You must ensure that you or a person acting on your behalf is <strong>present at all times</strong> when the goods are loaded or unloaded. You agree that we will not be held responsible or liable for goods not collected or any loss of or damage to goods if you or a person acting on your behalf is not present, for any amount of time, during the loading and/or unloading of the goods.</li>
            <li>You shall give sufficient and executable instructions. You warrant that any information that you have provided to us, and on which we have reasonably relied in assessing any quotation or estimate of the resources necessary to carry out the work, is accurate.</li>
            <li>You warrant that the description and particulars of the Goods are complete and correct.</li>
            <li>You warrant that the Goods are properly packed and labelled, except when packing has been done by R2G GROUP PTY LTD or any of its subcontractors.</li>
            <li>You warrant that the goods do not include any firearms or goods which are or may become of a dangerous, corrosive, highly combustible, explosive, damaging, or noxious nature nor likely to encourage any vermin or pest unless you have disclosed to R2G GROUP PTY LTD when the job was placed.</li>
            <li>You will, prior to the commencement of the removal or storage, give to us written notice of any Goods which are fragile or brittle in nature and which are not readily apparent as such, or which comprise jewellery, precious objects, works of art, money, collections of items or precision equipment, in any case, having a value in excess of $1,000.00.</li>
            <li>You warrant to the best of your ability, that all Goods to be removed or stored are uplifted and that none is taken in error.</li>
            <li>You agree to be liable for all and any fees, and costs incurred as a result of any consequences relating to any breaches of the terms of this agreement.</li>
            <li>You, as a customer, are obligated to secure parking space or a loading zone for our Removalists. If you fail to secure a parking space or a loading zone, we reserve the right to cancel and/or reschedule your move and keep the deposit. You will be responsible for all parking tickets, parking fines, and infringements that occur if we are unable to get an adequate and legal parking space at your premises.</li>
            <li>You, as a customer, are obligated to book any lifts or elevators (where applicable and if possible), providing a sufficient time slot to cover the entire duration of your move and organize any other arrangements required to complete the move. If you fail to do so, we will not be held responsible for any time lost or additional costs accrued with the elevator booking.</li>
          </ul>

          {/* ── 3. Removal Services ── */}
          <h2>3. Removal Services</h2>
          <ul>
            <li>We are not common carriers and accept no liability as such.</li>
            <li>We reserve the right to refuse to quote for the carriage of goods for any particular reason and for carriage of any goods or classes of goods at our discretion.</li>
            <li>You acknowledge and accept that any pick-up/delivery time or date advised by us is indicative only and is not guaranteed to be met. If there is a pick-up/delivery time or date that in our opinion cannot be reasonably met, then we reserve the right to alter that time or date at any time before the commencement of the move with reasonable notice.</li>
            <li>Due to OH&amp;S regulations, we expect your items and premises to be of standard cleanliness and we have the right to refuse to continue with the move if the Removalists believe there are safety risks. All your items should be put into boxes and the boxes must be suitable for moving. We will not move boxes that are not strong enough to carry the items that have been placed in them. Should any cleaning, organizing, and/or storage be required, you agree that we will charge you additional fees and/or costs.</li>
            <li>If our staff believe there are safety risks, or the work being requested is not suitable for our Removalists and/or equipment we have the right to refuse to undertake the work. We reserve the right to take any photos and videos of the premises or items for internal purposes.</li>
            <li>At any time we need to cancel the booking as a result of any OH&amp;S issues and/or regulations and safety risks, we are entitled to charge a service call fee and for any hours worked for the booking.</li>
            <li>We reserve the right to reschedule or cancel your move if the weather conditions are being unfavourable (rain, hail, etc.) due to OH&amp;S, if we feel it poses a safety risk to our staff.</li>
          </ul>

          {/* ── 4. Local Moves ── */}
          <h2>4. Local Moves (within the same state)</h2>
          <ul>
            <li>Our prices quoted in the booking confirmation are per hour rates and are charged in 15-minute increments. Please note that the prices are not a fixed price but an hourly rate, unless specifically agreed upon otherwise.</li>
            <li>Our Fixed Prices are quoted prior to us undertaking your move and are calculated based on the inventory you have provided. If there are any discrepancies between the inventory you have provided, we reserve the right to charge any differences calculated per a cubic metre, as per Your Obligations in clause 2. Any extra charges will be discussed with you prior to us moving the items. Any Fixed Price Quotes are payable at least one week prior to the date of your move unless agreed upon otherwise beforehand.</li>
            <li>Our rates start from the time our Removalists arrive on site until the completion of the move at the final destination address.</li>
            <li>A call-out fee will be charged on moves to cover our travel expenses traveling to and from the move. This fee will be quoted to you prior to your move.</li>
            <li>All moves incur a 2-hour minimum charge.</li>
            <li>Any waste disposal fees incurred during the move will be charged to you (incl. waste disposal fees and time taken).</li>
            <li>All moving estimates are given verbally (i.e. over the phone) and cannot be considered a fixed cost. The minimum fee is not a fixed cost of the move.</li>
            <li>We provide a quote for a number of trucks and Removalists which is based on the information you have provided over the phone and or email us about your property. This does not guarantee the work will be completed within a certain timeframe or that additional resources may not be required on the day if our Removalists believe it is necessary to complete the work within a given timeframe.</li>
          </ul>

          {/* ── 5. Specialist Items ── */}
          <h2>5. Specialist Items</h2>
          <p>Please notify us if you have any of the following items:</p>
          <ol>
            <li>Double Door or Commercial Refrigerator</li>
            <li>Piano or Organs (we do not move grand pianos or pianolas)</li>
            <li>Items made from marble, glass or acrylic</li>
            <li>Pool or Snooker Tables (we do not move commercial pool tables or any heavier than approximately 350kg)</li>
            <li>Animal enclosures, fish tanks, etc.</li>
            <li>Any items heavier than 100kg</li>
            <li>Any items larger than 3 meters in length</li>
            <li>Sensitive and/or delicate items such as fishing rods</li>
          </ol>
          <p>We reserve the right not to cover any damages to any of the above-listed items due to their fragile nature. We reserve the right to refuse to move these items if we were not informed of such items at the time of the booking. There may also be additional charges for moving any of the above items.</p>

          {/* ── 6. Warranties ── */}
          <h2>6. Warranties</h2>
          <ul>
            <li>You warrant that, in entering into this agreement, you are either the owner of the goods or the authorised agent of the owner of the goods.</li>
            <li>You should inspect all the goods as they are unloaded and/or relocated. If there is any loss of or damage to goods that you consider to have been caused by us, please ensure you notify our office no later than 24 hours after completion of the job. Unless you advise us within 24 hours of completion of the job, we will not be responsible or liable for any such alleged loss or damage.</li>
            <li>You must sign the job sheet on completion of the move. If you fail to sign the job sheet on completion of the move it will be taken as if you were not present at loading/unloading and that no loss or damage has been identified and therefore we will have no liability as detailed under the points above.</li>
            <li>We have zero tolerance to abusive or disrespectful behaviour. We expect you to be polite and not rude to our staff. We reserve the right to not complete a job if you or the people on your property are not acting in a professional manner. At any time we need to cancel the booking as a result of this, we are entitled to charge for any hours worked including the call-out fee.</li>
            <li>We do not tolerate any behaviour and/or words that we could reasonably interpret as defamation, abuse, threat, stalk, harassment, or anything that could violate the legal rights of others.</li>
            <li>You are expected to do a final inspection of your pick-up and drop-off properties prior to our Removalists leaving to ensure that nothing has been left behind and that all tasks requested have been completed. You should ensure all power, taps, etc. are off and doors, windows, and garages are locked.</li>
            <li>Prior to our Removalists arriving, you should disconnect all appliances from power and any hoses should be disconnected from their taps. You should also remove items such as TVs from any brackets/walls.</li>
            <li>If you have not done the above, our Removalists will do what they can in terms of removing items from walls or disconnecting and reconnecting appliances, however, they are not plumbers, electricians, or handymen and as such, we cannot guarantee or warrant those tasks. You should have a licensed plumber/electrician/handyman attend to these items or check these tasks once they have been completed.</li>
          </ul>

          {/* ── 7. Delivery ── */}
          <h2>7. Delivery</h2>
          <ul>
            <li>We will not be bound to deliver the goods except to you or a person authorised in writing by you to receive the goods. If we cannot deliver the goods either because there is no authorised person there to receive them on our arrival, or because we cannot gain access to the premises, or for any other reason beyond our control, we will be entitled to unload the goods into a warehouse, and will be entitled to charge an additional amount for storage and for the subsequent re-delivery of the goods. If this happens, we will endeavour to contact you to ascertain whether you have any alternate instructions.</li>
          </ul>

          {/* ── 8. Cancellation Policy ── */}
          <h2>8. Cancellation Policy</h2>
          <ul>
            <li>Local moves (i.e. moves within the same state) cancelled, rescheduled or placed on hold at least 48 hours prior to estimated arrival time will incur no fee and your deposit will be refunded.</li>
            <li>For local moves, the deposit will be automatically forfeited for any move cancelled, rescheduled or placed on hold within 48 hours of the estimated arrival time.</li>
            <li>Any move cancelled, rescheduled or placed on hold within 24 hours of the estimated arrival time will incur the minimum 2-hour charge. This will be charged onto the same credit card you paid with the deposit with unless you provide an alternative credit card at the time of cancellation.</li>
            <li>If we have to cancel your move for any reason other than not specified in these terms and conditions your deposit will be refunded otherwise your booking will be rescheduled if practical subject to our availability.</li>
            <li>Our quotes are subject to availability at the time the quote was provided to you. We give no guarantee there will be availability if you book at a later date. If we are unable to offer you our service during your requested time slot due to no availability, we will provide you with a refund of your deposit.</li>
          </ul>

          {/* ── 9. Payment and Deposits ── */}
          <h2>9. Payment and Deposits</h2>
          <ul>
            <li>We accept either cash (where applicable) or credit card as forms of payment. Cheques are not accepted unless pre-authorised with us. We accept Visa, MasterCard or American Express. Some payments may incur a credit card fee of up to 5%.</li>
            <li>You may not withhold any part of the amount due or additional charges.</li>
            <li>You shall not be entitled to withhold payment of any account by reason of any account query, dispute or set off except R2G GROUP PTY LTD written consent.</li>
            <li>In the event that you are on a cash-only account, payment would be payable before the service is provided.</li>
            <li>If we have arranged for your goods to be moved into storage, your credit card will be charged for the removal services once the unloading has been finished at the storage depot for the time and travel fee involved, unless arranged otherwise previously. You expressly authorise us to charge your credit card and sign off on the time it took to complete this work if you are not present at the time of unloading at the storage depot. This card will also be used for direct debit of your monthly storage payments, unless arranged otherwise beforehand.</li>
            <li>Goods held in lieu of payment. We reserve the right to seize or hold the goods and where you fail to pay any amount due, dispose of or sell goods in lieu of payment. We may dispose of goods in lieu of payment after a period of 28 days from the completion of the move.</li>
            <li>If your goods are in our storage facility or in storage under our arrangement, we will not provide any access under any circumstances to your goods until you have paid for the removal services and storage services in full. Alternatively, R2G GROUP PTY LTD has authority to charge your credit card for the amount stated on the job sheet. If you have any disputes regarding the work performed, you should contact the office during office hours to have this resolved. This is not a reason to withhold payment or part of payment.</li>
          </ul>
          <p><strong>Local Moves (within the same state):</strong></p>
          <ol>
            <li>A $100 deposit is required to secure your local booking. The deposit is non-refundable subject to the applicable Cancellation Policy in clause 8 above.</li>
            <li>You must pay the full amount due (less the deposit) on completion of the move either by cash or credit card. You must ensure that you have the payment available in either cash or credit card.</li>
            <li>If you do decide to pay by credit card, you expressly authorise us to process the credit card payment for the amount due (on the credit card provided by you, or if no credit card is provided, then the credit card used for the original deposit) within one (1) business day of completion of the move regardless of whether there is any dispute in relation to the move. To avoid any doubt, even if there is a dispute for any reason, you must still pay the amount due on completion of the move and you expressly authorise us to process the credit card payment for the amount due. If you have any issue or concern with your move or what you were charged, you should email our customer service team at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> so that it can be resolved.</li>
            <li>If you are not present at the completion of the move, you expressly authorise us to process the credit card payment for the amount due on the credit card used for the original deposit.</li>
            <li>If you are not present on your move, R2G GROUP PTY LTD at its discretion can charge the minimum payment prior to starting the move. This will be deducted from the final payment once the move is completed.</li>
            <li>If payment of the remaining amount is not received or is unable to be processed within seven (7) days of completion of the move, then the collection of the amount due will be passed to a debt collection agency and you will be subject to the debt collection agency fees in addition to interest charges.</li>
            <li>Interest shall run on the number of monies outstanding from the date due for payment until the date payment is made at the rate prescribed by the Penalty Interest Rates Act (QLD) plus two percent.</li>
            <li>In the event that you are in default of your obligation to pay and the overdue account is then referred to a debt collection agency, and/or law firm for collection you shall be liable for the recovery costs incurred and if the agency charges commission on a contingency basis you shall be liable to pay as a liquidated debt, the commission payable to the agency, fixed at the rate charged by the agency from time to time as if the agency has achieved one hundred percent recovery and the following formula shall apply: Commission = Original Debt / (100 - Commission % charged by the agency including GST) x 100.</li>
          </ol>

          {/* ── 10. Additional Charges ── */}
          <h2>10. Additional Charges</h2>
          <ul>
            <li>Some of our movers carry additional packing materials (including but not limited to bubble wrap, shrink wrap, etc.) and offer these products as additional services to the normal removal service. If you request using additional packing materials for extra protection of your goods, these will incur an additional charge which will be discussed with you prior to the Removalists undertaking this work. This amount will also be written on the job sheet and charged upon completion of the move.</li>
            <li>Without limitation and at R2G GROUP PTY LTD&apos;s discretion, upon unloading your goods, R2G GROUP PTY LTD reserves the right to withhold some of your goods in the truck until the final payment has been made.</li>
            <li>Extra charges of $150 per item may apply for e.g. Pianos, stone tabletops, billiard tables, butchers tables, oversized barbeques, and all other goods that may be considered oversized or overweight (100kgs and above) and might be a risk to the safety of our staff. This is referred to as a Heavy Lifting Fee and it gets distributed directly to the workers.</li>
            <li>Recovery for legal costs. You are liable for any additional cost(s) incurred by us, as a result of having to recover overdue or outstanding monies from you.</li>
          </ul>

          {/* ── 11. Vehicle Sizes ── */}
          <h2>11. Vehicle Sizes</h2>
          <ul>
            <li>We endeavour to always quote the correct vehicle for your move. However, our decisions are based on the information we are provided by you over the phone or when you completed our online enquiry form. We will not be liable if the truck provided is too small for a single move and multiple moves are required.</li>
            <li>Please advise us of any loading docks height clearance. Our large trucks have a height minimum of 3.6m and our smaller trucks have a height minimum of 3m.</li>
            <li>We will be entitled to charge for additional hours than originally quoted if the proper clearance is not advised.</li>
          </ul>

          {/* ── 12. Method of Carriage and Subcontractors ── */}
          <h2>12. Method of Carriage and Subcontractors</h2>
          <ul>
            <li>We will be entitled to carry the goods by any reasonable route (having regard to all the circumstances including the nature and destination of any other goods being carried on the vehicle) and by any reasonable means.</li>
            <li>We may hire or engage subcontractors to fulfil the services under this Agreement.</li>
            <li>We reserve the right, at our discretion, and without notice to you to subcontract all or part of the carriage of goods, and as a result of such, you indemnify us for any delay or damage due to any act or omission of the subcontractor, its employees or agents.</li>
            <li>Any provisions in these conditions which limit our liability also apply to our employees and our subcontractors and their employees.</li>
          </ul>

          {/* ── 13. Risk, Title, and Liability ── */}
          <h2>13. Risk, Title, and Liability</h2>
          <ul>
            <li>All risks in the goods will pass to you on delivery.</li>
            <li>All of your goods received by us will be subject to a general lien for any monies owed by you to us as a result of this Contract.</li>
            <li>Title in the goods will not pass to you until we have been paid in full for the move.</li>
            <li>Our maximum liability shall be an estimate of the value of the goods that you have provided to R2G GROUP PTY LTD.</li>
            <li>Your goods are dispatched at your own risk as per terms of the agreement.</li>
            <li>We do not provide any warranty that the goods the subject of the consignment will be delivered by any particular time.</li>
            <li>If we transport your pot plants that have fire ants or fire ants&apos; nests in them, you will be 100% responsible for all costs associated with the removal of the fire ants, incl. but not limited to fumigation of trucks and fines.</li>
            <li>We shall not be liable for any damage or loss to your goods when the collection place is a storage facility or a storage unit that has not been packed by R2G GROUP PTY LTD.</li>
            <li>We exclude liability and responsibility in tort, for implied warranties and otherwise in so far as may be subject to the provision of the Competition and Consumer Act 2010 (Cth) or similar state acts, for any loss of and/or damage to or deteriorations of goods the subject of the consignment for any reason including but not limited to the neglect or wilful conduct of the nominated carrier or the third parties.</li>
            <li>We shall not be liable for any indirect, consequential, or special losses suffered.</li>
            <li>In addition to any lien at law, you acknowledge that R2G GROUP PTY LTD has a particular and general lien over all Goods sold to or stored on your behalf in R2G GROUP PTY LTD&apos;s possession for all money due now or in the future. R2G GROUP PTY LTD may, after giving 7 days&apos; notice, sell or otherwise dispose of such Goods at your expense and without any liability to R2G GROUP PTY LTD and you hereby indemnify R2G GROUP PTY LTD from any loss caused due to the sale of the Goods or otherwise.</li>
          </ul>

          {/* ── 14. Insurance, Loss & Damages ── */}
          <h2>14. Insurance, Loss &amp; Damages</h2>
          <ul>
            <li>You understand that whilst R2G GROUP PTY LTD is fully insured (Public Liability, Goods in Transit, Vehicle Cover, etc.) this insurance does not automatically extend to customers, and <strong>it is your responsibility to organise your own contents insurance.</strong></li>
            <li>We have Goods in Transit Insurance as well as Public Liability Insurance to cover events wherein it has the discretion to apply if our Removalists are deemed to have carried out the service in a reasonable way that is negligent. If there is a claim to be made, the insurance excess value is $500 and is payable by you.</li>
            <li>For instance, when our Removalists are not negligent, insurance is highly recommended by us and you acknowledge and accept sole responsibility to ensure that your goods are adequately insured for loading, unloading and transportation by organizing relevant insurance cover. Insurance can be obtained by contacting your current contents insurance provider or Removals Insurance Australia who are our trusted insurance brokers and are able to arrange insurance for your goods while they are in transit.</li>
            <li>For any minor cosmetic damages such as scuffs, scratches or dents, which can be reasonably proven that the damage occurred whilst the items were being moved by our staff, we offer a compensation of $50 per item damaged, with the exception to specialist items and certain goods mentioned below.</li>
            <li><strong>Certain goods</strong> (including but not limited to all electrical and mechanical appliances, computer equipment, scientific instruments, musical instruments, antiques, pot plants, specialist items and old, or self-assembled furniture) <strong>are inherently susceptible to suffer damage or disorder upon removal.</strong> Unless that damage or disorder results from the want of due care and skill on the part of R2G GROUP PTY LTD, its employees or subcontractors, we will not be held responsible for any damages.</li>
            <li>Any damage to TVs will not be covered unless the TV was packed in its original box, and/or in the TV Box provided by R2G GROUP PTY LTD.</li>
            <li>We will not be liable if the Goods sustain damage by reason of defective or inadequate packing or unpacking, and the packing or unpacking (as the case may be) was not undertaken by R2G GROUP PTY LTD, its employees or subcontractors.</li>
            <li>We will not be liable for any loss or damage nor any delay which results from any cause beyond our control. Under no circumstances will we be responsible for any loss or damage involving the restoration or reconstruction of information or data or any item if so-called consequential loss.</li>
            <li>These terms and conditions are in addition to any other rights or remedies that you may have under the Australian Consumer Law. Those additional remedies remain to the extent that they cannot be excluded. To the extent that they can be excluded they are. Where they cannot be excluded then such rights and remedies are modified to the extent permitted by law.</li>
            <li><strong>You must notify R2G GROUP PTY LTD before the completion of the job</strong> if there is any damage/loss to your goods. Failure to notify us within this period means we will not be responsible or liable for any such alleged loss or damage. Irrespective of any damage or loss that may have been caused by R2G GROUP PTY LTD, you will still need to make complete payment upon completion of unloading your goods. For any claim for damage or loss you will need to contact the office so that the normal process for claims can be followed.</li>
            <li>If the goods sustain damage by reason of defective or inadequate packaging, packing or unpacking, and the packing or unpacking (as the case may be) was not undertaken by us or our subcontractor, we will not be liable for any loss or damage to the goods. It is your responsibility to ensure your goods are properly packaged and protected in a suitable manner for transport. R2G GROUP PTY LTD takes no responsibility for goods damaged during transport that were not adequately protected using packaging.</li>
            <li>We will not be liable for any damage to your goods or premises when you have been advised by our staff that damage may occur due to the nature or construction of the item, and/or the limited access available for manoeuvrability.</li>
            <li>Notwithstanding anything contained in these terms we will only be responsible or liable for loss or damage to goods where such loss or damage can be proven (without reasonable doubt) to have been caused by our negligence. If an item is damaged and is to be replaced, R2G GROUP PTY LTD will collect and take ownership of the damaged item and organise compensation with you.</li>
            <li>In any claim for loss or damage under this clause, any estimate of the value of the goods which you have provided to us, whether for the purposes of insurance or otherwise, will be prima facie evidence that the total value of the goods did not exceed that estimate at the time of loss or damage.</li>
            <li>Notwithstanding anything else contained in these terms and conditions, our liability is limited to repairing the damaged goods to as near the condition as prior to the damage occurring as possible or replacing lost goods with the same or similar goods. Such compensation will be equal to the market value of the item at the time of damage, taking into account any wear and tear. The customer acknowledges and agrees that any compensation for the damaged item shall be limited to its current market value at the time of damage, and that we will not be responsible for the cost of a brand new replacement item. These repairs or replacements will be arranged by us unless arranged otherwise. No responsibility is accepted for any other losses whatsoever including any consequential loss or loss of value as a result of repairs or replacement of goods. In lieu of repairing goods we have the option to compensate you, by paying to you the value of the damaged goods prior to the damage occurring. If the value cannot be agreed on between us it will be assessed by an independent valuer chosen between us, and if we cannot agree, chosen by the President for the time being of the Queensland Law Society. The value of determination will be final and binding on the parties. The costs of the valuer will be paid by the party whose value differs most from the valuers.</li>
            <li>Where an item is part of a pair or set of items, repair or compensation will extend only to the proportionate part of the pair or set of items.</li>
            <li>If you or someone on-site that is not one of our movers, assists with the loading or unloading of your goods into or out of our truck, you may not be covered by our insurance policies.</li>
          </ul>

          {/* ── 15. Packing Materials ── */}
          <h2>15. Packing Materials</h2>
          <ul>
            <li>All packaging materials are at an additional cost to the client. Please organise your boxes directly with R2G GROUP PTY LTD either over the phone on <a href="tel:1300959498">{PHONE}</a> or via email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</li>
            <li>Our Removalists will not collect used butchers paper or rubbish. It is the clients&apos; duty to dispose of these.</li>
          </ul>

          {/* ── 16. Packing and Unpacking Services ── */}
          <h2>16. Packing and Unpacking Services</h2>
          <ul>
            <li>R2G GROUP PTY LTD offers packing and unpacking services as part of its complete moving service. These services are available at a minimum of 2 hours.</li>
            <li>There is no guarantee as to the amount of packing/unpacking work undertaken in the specified time. Generally, each packer can pack/unpack 4-6 boxes per hour. Should you request additional hours on the day, this will be billed to your credit card at the time of requesting the additional hours.</li>
            <li>It is your responsibility to ensure you have adequate boxes and packaging material (we recommend 1 kg of butcher paper for every 4 boxes). In a typical 4 hour session, you should have at least 30 boxes available (a combination of book cartons and tea chest boxes) along with packaging tape. If you are unable to obtain the boxes or any other packing material, you can organise these with us prior to the packing service.</li>
            <li>If bookings are cancelled within 24 hours of the booked start time, there will be no refund on the payment made, you will still pay the full deposit and call-out fee. Should our packers be unable to gain access to the property on the day or there is some form of dispute/disagreement on-site with the parties inside the house, the packers will leave the property and you will still be charged the deposit and call-out fee.</li>
            <li>If bookings are re-scheduled or postponed on the same day as the booked start date, this is subject to our availability and you may lose the deposit.</li>
            <li>Our quotes are subject to availability at the time the quote was provided to you. We give no guarantee there will be availability if you book at a later date. If we are unable to offer you our service during your requested time slot due to no availability, we will provide you with a refund.</li>
            <li>R2G GROUP PTY LTD will not be responsible for any damage or loss of items related to our packing or unpacking services. If you have any jewellery or valuable items of concern to you, we recommend you pack and store these items and not have our packers pack them for you.</li>
            <li>R2G GROUP PTY LTD has the right to not pack or unpack in any property that is not considered to be at a reasonable hygiene level. If your property and/or goods are not considered clean we have the right to not undertake the work to comply with our OH&amp;S policies.</li>
          </ul>

          {/* ── 17. Storage Services ── */}
          <h2>17. Storage Services</h2>
          <p>The Storer:</p>
          <ol>
            <li>Acknowledges that R2G GROUP PTY LTD and/or the Facility Owner (&quot;FO&quot;) &quot;we&quot;, &quot;us&quot;, the &quot;operator&quot; will provide storage in accordance with the following terms and conditions.</li>
            <li>R2G GROUP PTY LTD has the right to subcontract our storage space and for the purpose of this agreement, your agreement, terms and conditions and dealings are directly with R2G GROUP PTY LTD and not any third party storage company that we have the right to use.</li>
            <li>May store Goods in the Space allocated to the Storer by R2G GROUP PTY LTD and/or the Facility Owner, and only in that Space.</li>
            <li>Has knowledge of the Goods in the Space.</li>
            <li>Warrants that they are the owner of the Goods in Space, and/or are entitled at law to deal with them in accordance with all aspects of this Agreement.</li>
          </ol>
          <p>R2G GROUP PTY LTD and FO:</p>
          <ol>
            <li>Does not have and will not be deemed to have, knowledge of the Goods.</li>
            <li>Is not a bailee nor a warehouseman of the Goods and the Storer acknowledges that R2G GROUP PTY LTD nor FO does not take possession of the Goods.</li>
          </ol>
          <p>The Storer must upon moving goods into storage pay to R2G GROUP PTY LTD:</p>
          <ol>
            <li>The amount quoted per module/container upfront for the month in advance.</li>
            <li>The Storage Fee being the amount notified to the Storer by R2G GROUP PTY LTD. This Storage Fee is payable in advance on a monthly basis and it is the Storer&apos;s responsibility to make payment directly to R2G GROUP PTY LTD on time, and in full, throughout the period of storage. Any Storage Fees paid by direct deposit/direct credit will not be credited to Storer&apos;s account unless the Storer identifies the Direct Payment clearly and as reasonably directed by R2G GROUP PTY LTD. R2G GROUP PTY LTD and the FO is indemnified from any claim for enforcement of the Agreement, including the sale or disposal of Goods, due to the Storer&apos;s failure to correctly identify a Direct Payment.</li>
            <li>Unless you notify R2G GROUP PTY LTD otherwise, you agree for the storage charges to be charged onto the same credit card with which you paid the deposit for your removal service on a monthly basis, unless specifically arranged otherwise with R2G GROUP PTY LTD&apos;s written consent.</li>
            <li>A Late Payment Fee ($55), as indicated on the front of the Agreement, which becomes payable each time a payment is late.</li>
            <li>Any reasonable costs incurred by R2G GROUP PTY LTD in collecting late or unpaid Storage Fees, or in enforcing this Agreement in any way, including but not limited to postal, telephone, debt collection, personnel and/or the Default Action costs.</li>
          </ol>
          <ul>
            <li>The Storer will be responsible for payment of any government taxes or charges (including any goods and services tax) being levied on this Agreement, or any supplies pursuant to this Agreement.</li>
          </ul>
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 not-prose mt-4">
            <p className="text-sm text-gray-700 leading-relaxed"><strong>IMPORTANT:</strong> The storer acknowledges and agrees that the storage provided by us is not a self-storage facility and as such, they will not have access to their stored belongings. We may, under special circumstances reasonably agreed upon between us, allow access to the stored items. However, a depot-handling fee of $50 will be payable each time access is granted, which covers expenses associated with wages and using forklift equipment to bring the container.</p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">The storer further acknowledges and agrees that once access to their storage unit is granted, we cannot be held liable for any damages or missing items. The storer is solely responsible for the safety and security of their stored belongings during the time they are accessing their unit.</p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">We reserve the right to refuse access to any storer at any time, at our sole discretion, including without limitation, where such access may be deemed unsafe or potentially damaging to our equipment or premises.</p>
          </div>

          {/* ── 18. Default ── */}
          <h2>18. Default</h2>
          <ul>
            <li>The Storer acknowledges that, in the event of the Storage Fee, or any other monies owing under this Agreement, not being paid in full within 42 days of the due date, R2G GROUP PTY LTD may enter the Space, by force or otherwise, and/or sell or dispose of any Goods in the Space on such terms that R2G GROUP PTY LTD may determine. For the purposes of the Personal Property Securities Act 2009, R2G GROUP PTY LTD is deemed to be in possession of the Goods from the moment R2G GROUP PTY LTD accesses the Space. The Storer consents to and authorises the sale or disposal of all Goods regardless of their nature or value. R2G GROUP PTY LTD may also require payment of Default Action costs, including any costs associated with accessing the Storer&apos;s Space and disposal or sale of the Storer&apos;s Goods. Any excess funds will be returned to the Storer within 6 months of the sale of goods. In the event that the Storer cannot be located, excess funds will be deposited with the Public Trustee or equivalent authority. In the event that the Storer has more than one Space with R2G GROUP PTY LTD, default on either Space authorises R2G GROUP PTY LTD to take Default Action against all Spaces.</li>
            <li>At least 14 days before R2G GROUP PTY LTD can take any Default Action, R2G GROUP PTY LTD will provide the Storer with a Notice that the Storer is in Default. R2G GROUP PTY LTD will provide the Storer with reasonable time to rectify the Default before any Default Action is taken.</li>
          </ul>

          {/* ── 19. Right To Dispose ── */}
          <h2>19. Right To Dispose</h2>
          <ul>
            <li>If, in the reasonable opinion of R2G GROUP PTY LTD, a defaulting Storer&apos;s Goods are either not saleable, fail to sell when offered for sale, may pose a health risk to the storer or the public if handled, or are not of sufficient value to warrant the expense of attempting to sell, R2G GROUP PTY LTD may dispose of all Goods in the Storer&apos;s Space by any means.</li>
            <li>Further, upon Termination of the Agreement (Clause 24) by either the Storer or R2G GROUP PTY LTD or by the FO, in the event that a Storer fails to remove all Goods from their Space or the Facility, R2G GROUP PTY LTD is authorised to dispose of all Goods by any means 7 days from the Termination Date, regardless of the nature or value of the Goods. R2G GROUP PTY LTD will give 7 days&apos; notice of intended disposal.</li>
            <li>Any items deemed left, in R2G GROUP PTY LTD&apos;s reasonable opinion, unattended in common areas or outside the Storer&apos;s Space at any time may at R2G GROUP PTY LTD&apos;s reasonable discretion be sold, disposed, moved or dumped immediately and at the expense and liability of the Storer.</li>
          </ul>

          {/* ── 20. Access And Conditions ── */}
          <h2>20. Access And Conditions</h2>
          <p>The Storer:</p>
          <ol>
            <li>Does not have the right to access the Space unless previously organised with R2G GROUP PTY LTD at least 48 hours in advance and subject to the terms of this Agreement.</li>
            <li>Must not store any Goods that are hazardous, illegal, stolen, explosive, environmentally harmful, perishable or that are a risk to the property of any person.</li>
            <li>Must not store items which are irreplaceable, and/or currency, jewellery, furs, deeds, paintings, curios, works of art and items of personal sentimental value.</li>
            <li>Will use the Space solely for the purpose of storage and shall not carry on any business or other activity in the Space.</li>
            <li>Must not attach nails, screws, etc. to any part of the Space, must maintain the Space by ensuring it is clean and in a state of good repair, and must not damage or alter the Space without R2G GROUP PTY LTD&apos;s consent.</li>
            <li>In the event of uncleanliness of or damage to the Space or Facility, R2G GROUP PTY LTD will be entitled to charge the Storer for reimbursement for the cleaning and/or repair costs.</li>
            <li>Cannot assign this Agreement.</li>
            <li>Must give Notice of the change of address, phone numbers or email address of the Storer or the Alternate Contact Person within 48 hours of any change.</li>
            <li>Grants R2G GROUP PTY LTD and the FO entitlement to discuss any default by and any information it holds regarding the Storer with the Alternate Contact Person registered on the front of this Agreement.</li>
            <li>Is solely responsible for determining whether the Space is appropriate and suitable for storing the Storer&apos;s Goods, having specific consideration for the size, nature and condition of the Space and Goods.</li>
          </ol>
          <ul>
            <li>In addition, R2G GROUP PTY LTD and the FO has the right to refuse access to the Space and/or the Facility where any monies are owing by the Storer to R2G GROUP PTY LTD.</li>
            <li>R2G GROUP PTY LTD or FO will not be liable for any loss or damage incurred by the Storer resulting from any inability to access the Facility or the Space.</li>
            <li>R2G GROUP PTY LTD and the FO reserves the right to relocate the Storer to another Space under certain circumstances, including but not limited to unforeseen extraordinary events or redevelopment of the Facility.</li>
            <li>R2G GROUP PTY LTD may dispose of the Storer&apos;s Goods in the event that Goods are damaged due to fire or flood or other event that has rendered Goods, in the reasonable opinion of R2G GROUP PTY LTD severely damaged, or dangerous to the Facility, any persons, or other Storers and/or their Goods. Where practicable, R2G GROUP PTY LTD will provide the Storer with reasonable Notice and an opportunity to review the Goods before the Goods are disposed of.</li>
            <li>The Storer acknowledges that it has raised with R2G GROUP PTY LTD all queries relevant to its decision to enter this Agreement and that R2G GROUP PTY LTD has, prior to the Storer entering into this Agreement, answered all such queries to the satisfaction of the Storer.</li>
          </ul>

          {/* ── 21. Risk And Responsibility ── */}
          <h2>21. Risk And Responsibility</h2>
          <ul>
            <li>The R2G GROUP PTY LTD and FO&apos;s services come with non-excludable guarantees under consumer protection law, including that they will be provided with due care and skill. Otherwise, to the extent permitted by law, the Goods are stored at the sole risk and responsibility of the Storer who shall be responsible for any and all theft, damage to, and deterioration of the Goods, and shall bear the risk of any and all damage caused by flood or fire or leakage or overflow of water, mildew, heat, mould, spillage of material from any other space, removal or delivery of the Goods, pest or vermin or any other reason whatsoever.</li>
            <li>Where loss, damage or injury is caused by the Storer, the Storer&apos;s actions or the Storer&apos;s Goods, the Storer agrees to indemnify and keep indemnified R2G GROUP PTY LTD and the FO from all claims for any loss of or damage to the property of, or personal injury to or death of the Storer, the Facility, R2G GROUP PTY LTD and the FO or third parties resulting from or incidental to the use of the Space by the Storer, including but not limited to the storage of Goods in the Space, the Goods themselves and/or accessing the Facility, and the Storer will be held financially responsible for all costs incurred.</li>
            <li>Certain laws may apply to the storage of goods including criminal, bankruptcy, liquidation, and others. The Storer acknowledges and agrees to comply with all relevant laws, including Acts and Ordinances, Regulations, By-laws, and Orders, as are or may be applicable to the use of the Space.</li>
            <li>If R2G GROUP PTY LTD reasonably believes that the Storer is not complying with any relevant laws, R2G GROUP PTY LTD may take any action as it reasonably believes to be necessary, including contacting, cooperating with and/or submitting Goods to the relevant authorities, and/or immediately disposing of or removing the Goods at the Storer&apos;s expense.</li>
          </ul>

          {/* ── 22. Inspection And Entry ── */}
          <h2>22. Inspection And Entry By R2G Group Pty Ltd And/Or The FO</h2>
          <ul>
            <li>Subject to clause 21, the Storer consents to inspection and entry of the Space by R2G GROUP PTY LTD and the FO provided that R2G GROUP PTY LTD gives 14 days&apos; Notice.</li>
            <li>In the event of an emergency, that is where obliged to do so by law or in the event that property, the environment or human life is, in the reasonable opinion of R2G GROUP PTY LTD, threatened, R2G GROUP PTY LTD may enter the Space using all necessary force without the consent of the Storer, but R2G GROUP PTY LTD shall thereafter notify the Storer as soon as practicable. The Storer consents to such entry.</li>
          </ul>

          {/* ── 23. Notice ── */}
          <h2>23. Notice</h2>
          <ul>
            <li>Notice will usually be given by email or SMS, or otherwise will be left at, or posted to, or faxed to the address of the Storer. In relation to the giving of Notice by the Storer to R2G GROUP PTY LTD, Notice must be in writing and actually be received to be valid, and R2G GROUP PTY LTD may specify a required method. In the event of not being able to contact the Storer, Notice is deemed to have been given to the Storer by R2G GROUP PTY LTD if R2G GROUP PTY LTD has sent Notice to the last notified address or has sent Notice via any other contact method, including by SMS or email to the Storer or the Alternate Contact Person without any electronic bounce-back or similar notification. In the event that there is more than one Storer, Notice to or by any single Storer is agreed to be sufficient for the purposes of any Notice requirement under this Agreement.</li>
          </ul>

          {/* ── 24. Termination ── */}
          <h2>24. Termination</h2>
          <ul>
            <li>Once the initial paid period of storage has ended, either party may terminate this Agreement by giving the other party Notice of the Termination Date in accordance with the period indicated on the front of this Agreement. In the event of any activities reasonably considered by R2G GROUP PTY LTD to be illegal or environmentally harmful on the part of the Storer, R2G GROUP PTY LTD may terminate the Agreement without Notice. R2G GROUP PTY LTD is entitled to retain or charge apportioned storage fees if less than the requisite Notice is given by the Storer. The Storer must remove all Goods in the Space before the close of business on the Termination Date and leave the Space in a clean condition and in a good state of repair to the satisfaction of R2G GROUP PTY LTD.</li>
            <li>The Parties&apos; liability for outstanding monies, property damage, personal injury, environmental damage and legal responsibility under this Agreement continues to run beyond the termination of this Agreement.</li>
          </ul>

          {/* ── 25. Force Majeure ── */}
          <h2>25. Force Majeure</h2>
          <ul>
            <li>We are entitled (without liability to you) to delay, vary or cancel the performance of any of its obligations if and to the extent that it is prevented from, hindered in or delayed in the performance of any of its obligations by normal route or means of delivery or at costs commercially acceptable to R2G GROUP PTY LTD through any circumstances beyond its control including acts of God, governmental actions, strikes or other labour disputes (whether or not relating to R2G GROUP PTY LTD&apos;s workforce), lock-outs, accidents, war or national emergency, acts of terrorism, protests, riot, civil commotion, explosion, flood, epidemic, fire, natural disasters, extreme adverse weather, reduction in or unavailability of energy sources, restrictions or delays affecting the delivery of the Supplies, default of suppliers or subcontractors.</li>
          </ul>

          {/* ── 26. Fortuitous Event ── */}
          <h2>26. Fortuitous Event</h2>
          <ul>
            <li>We will not be liable for any delays due to circumstances beyond its control including industrial disputes, riots, war, weather, property access, traffic and road conditions, or the failure of the international sea or air carrier(s) to transit the Goods within the agreed time frames.</li>
          </ul>

          {/* ── 27. Severance ── */}
          <h2>27. Severance</h2>
          <ul>
            <li>If any clause, term, or provision of this Agreement is legally unenforceable or is made inapplicable, or in its application would breach any law, that clause, term or provision shall be severed or read down, but so as to maintain (as far as possible) all other terms of the Agreement.</li>
          </ul>

          {/* ── 28. Privacy ── */}
          <h2>28. Privacy</h2>
          <ul>
            <li>In order to provide this quotation, and to enable and assist to provide R2G GROUP PTY LTD&apos;s services and if you accept this quotation, R2G GROUP PTY LTD collect and hold personal information (such as your name, contact details, addresses and banking/payment details as well as photographs of your personal property which may have helped in providing a quotation or assessing a claim). R2G GROUP PTY LTD endeavours to protect your privacy.</li>
          </ul>

          {/* ── Contact ── */}
          <h2>Contact Us</h2>
          <p>If you have questions about these terms, please contact us:</p>
          <ul>
            <li>Phone: <a href="tel:1300959498">{PHONE}</a></li>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>

        </div>
      </section>
    </>
  );
}
