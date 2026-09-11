export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: readonly string[];
  content: string;
};

export const posts: readonly BlogPost[] = [
  {
    slug: "estimated-taxes-for-freelancers",
    title: "Estimated taxes for freelancers: a practical overview",
    description: "How quarterly estimated taxes generally work for freelancers and independent contractors — educational, not advice.",
    date: "2026-01-14",
    tags: ["estimated tax", "freelancers", "self-employment"],
    content: `
When you earn income that is not fully covered by paycheck withholding, the IRS generally expects you to pay tax as you go. For many freelancers and independent contractors, that means **estimated tax payments** during the year — not a single surprise in April.

This overview is educational. Whether you need to pay estimates, how much, and which method fits is fact-specific. Use it as a map, then talk through your numbers with a CPA.

## Why estimates show up for freelance work

W-2 wages typically have federal (and often state) income tax withheld. A 1099-NEC or similar freelance payment usually does not. You may also owe **self-employment tax** (Social Security and Medicare on net earnings from self-employment), which W-2 employees generally split with an employer.

If your withholding and credits will not cover most of the tax you expect to owe, estimated payments are how the system collects tax during the year. The IRS can charge an underpayment penalty even if you later get a refund when you file — timing matters, not only the year-end total.

## The usual quarterly rhythm

For calendar-year individuals, estimated tax is commonly due in four installments. For **2026**, those dates are generally:

- April 15, 2026 (income from January through March)
- June 15, 2026 (April through May)
- September 15, 2026 (June through August)
- January 15, 2027 (September through December)

If a date falls on a weekend or legal holiday, the IRS generally treats the next business day as timely. Always confirm the current year's calendar on [IRS.gov](https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes).

January's payment is often the last estimate for the prior year. Some people choose to file and pay their return early instead of making that last installment — whether that works depends on your facts.

## What people usually look at

A rough planning conversation often includes:

- Expected **net** self-employment income (after ordinary business expenses)
- Other income: wages, interest, spouse's income on a joint return
- Withholding already happening on any W-2 job
- Credits you reasonably expect
- Prior-year tax (the “safe harbor” idea: paying a required percentage of last year's tax can, in many cases, limit underpayment penalties even if this year is higher)

There is no single percentage that is “the freelancer tax rate.” Effective rates change with filing status, deductions, state tax, retirement contributions, and how much is wages versus 1099.

## Habits that keep estimates manageable

- Set aside a portion of each client payment in a separate savings account so April and June are not a scramble.
- Recalculate midyear if a large project lands or work dries up. Estimates can be updated; they do not have to stay frozen at January's guess.
- Track expenses as you go. Overstating net profit because you forgot software, contractor costs, or home-office facts can inflate what you think you owe.
- Do not ignore state estimates if your state requires them. Federal and state calendars are related but not always identical.

## Common misunderstandings

**“I will just pay it all when I file.”** That can work if withholding or a prior credit is already enough, or if you truly will owe very little. It is a poor plan if you have substantial unpaid 1099 income and little withholding.

**“My first year is too messy to estimate.”** First-year freelancers often have the most volatility. A conservative midyear check-in is usually better than waiting until March.

**“Estimated tax is only for people who make a lot.”** The IRS generally cares whether you expect to owe at least a threshold amount after withholding — not whether you think of yourself as a “small” freelancer.

## How this firm approaches the conversation

At NB Tax and Advisory, CPA, estimated-tax conversations are part of ordinary planning for contractors, consultants, and side-business owners. We look at last year's return, this year's activity, and whether withholding on any W-2 job is doing enough of the work. The goal is fewer surprises — not a promise of a particular refund or bill.

If you are unsure whether you should be making 2026 estimates, gather last year's return, a recent profit-and-loss or bank summary, and any W-2s, then [contact the firm](/contact/).
`,
  },
  {
    slug: "s-corp-reasonable-compensation-basics",
    title: "S-corp reasonable compensation: the basics owners should know",
    description: "A high-level look at why S-corporation owners who work in the business generally take a salary — education, not advice.",
    date: "2026-02-04",
    tags: ["S-corp", "payroll", "reasonable compensation"],
    content: `
Electing S-corporation status can change how business profits show up on an owner's personal return. It does **not** mean the owner who works in the company can take everything as a distribution and skip payroll. The IRS expects **reasonable compensation** for services the shareholder-employee actually performs.

This article is a plain-language orientation. What is “reasonable” is factual, and payroll, retirement, and state rules all interact. It is not a recommendation to elect S-corp status or to set a particular salary.

## What the S-corp election changes

An eligible LLC or corporation that is treated as an S-corporation generally does not pay federal income tax at the entity level. Profit or loss flows through to the owners on a Schedule K-1 and is reported on their individual returns.

Shareholders who work in the business are also employees for that work. Wages run through payroll: federal income tax withholding, Social Security and Medicare (FICA), unemployment tax, and typically state withholding. Remaining profit after wages and other expenses may be distributed — and those distributions are generally not subject to self-employment tax the way a sole proprietor's net profit is.

That last point is why compensation gets scrutiny. If wages are set far below what similar work would pay, the IRS may recharacterize distributions as wages, with tax, penalties, and interest that follow.

## What “reasonable” usually considers

There is no IRS postcard with your exact salary printed on it. Examiners and practitioners commonly look at factors such as:

- The owner's role, hours, and skills (rainmaker vs. part-time bookkeeper)
- What comparable businesses pay for similar work in the same market
- The company's revenue, profitability, and distributions
- Whether other employees perform the same functions
- Formality: written payroll, timely Forms 941 and W-2, and consistent treatment

A company with thin profits may not support a large salary. A profitable firm where the owner is the only professional delivering the service usually cannot support a token wage and large distributions.

## Practical guardrails owners forget

- **Payroll has to actually run.** Setting a number in a planning memo is not the same as paying it, withholding, and filing employment returns.
- **Late payroll catch-up is messy.** “We will run a big December paycheck” can create deposit-penalty and cash-flow problems.
- **Health insurance and retirement** for more-than-2% S-corp shareholders have special reporting. Those rules are easy to miss when someone treats the company like a sole prop with an extra form.
- **State unemployment and workers' compensation** still apply in many cases. Federal reasonable-compensation talk does not replace state employer duties.

## When the conversation is worth having

Reasonable compensation comes up when a profitable owner-operator is considering an S-election, when distributions have grown much faster than wages, or when a prior-year return looks informal. It also comes up in tax relief: if payroll was skipped for years, catching up filings and employment tax can be part of getting current.

NB Tax and Advisory, CPA works with small S-corps and LLCs on returns, payroll coordination, and planning conversations. We do not sell “how low can we set the salary” packages. We talk through the facts you actually have.

If you are weighing an S-election or revisiting owner pay, bring a recent profit-and-loss, how you currently pay yourself, and what work you do week to week — then [call the firm](/contact/).
`,
  },
  {
    slug: "what-to-do-when-you-get-an-irs-notice",
    title: "What to do when you get an IRS notice",
    description: "A calm, educational walkthrough of first steps after an IRS letter arrives — not a substitute for advice on your notice.",
    date: "2026-02-18",
    tags: ["IRS notices", "tax relief", "representation"],
    content: `
An IRS envelope on the kitchen table can spike anyone's pulse. Most notices are not a raid. Many are math reviews, missing forms, balance reminders, or requests for information. A smaller number involve exams, liens, or levies. The useful first move is the same: **slow down and read the letter**.

This is general education. Your notice type, tax year, and deadlines control what you should do next.

## Step 1: Identify what you actually received

Look at the upper-right or header for a **notice number** (for example, CP14, CP2000, Letter 3219). Write down:

- The tax year or periods
- The amount the IRS says you owe or the change they propose
- Any **response deadline**
- Whether they are asking for payment, a form, or an explanation

Do not rely on a voicemail or a text that claims to be the IRS. The IRS generally initiates contact by mail for these matters. If something feels off, verify using the phone number printed on the notice or IRS.gov — not a number from an unexpected email.

## Step 2: Match the letter to your records

Pull the return for that year, the transcripts if you have them, and the forms the notice mentions (W-2, 1099, 1098). Ask:

- Did I file that year?
- Does the income they list match what I reported?
- Is this a duplicate of a notice I already answered?
- Did I already pay, or set up an installment agreement?

A surprising number of notices are about a 1099 that never reached the return, a name/TIN mismatch, or an estimated-tax penalty — not fraud and not a criminal case.

## Step 3: Do not ignore a deadline

Even if you disagree, missing a stated deadline can limit appeal rights or allow the IRS to assess a proposed amount. If you need more time to gather documents, note that in your response plan — and do not assume silence is safe.

If the notice is about collection (balance due, intent to levy, lien), time still matters. Representation through **Form 2848** can let a CPA speak with the IRS on authorized issues so you are not fielding every call alone. See our overview of [how Form 2848 representation works](/resources/blog/how-form-2848-representation-works/).

## Step 4: Choose a response path

Typical paths include:

- **Agree and pay** or arrange a payment plan if the balance is correct
- **Disagree with documentation** (corrected 1099, proof of withholding, copy of a filed return)
- **File a missing return** if the notice is about an unfiled year
- **Request penalty relief** when facts support reasonable cause or another IRS program
- **Get professional help** when the letter is an audit, a large CP2000, a levy threat, or you do not understand the tax year involved

Do not send original irreplaceable documents unless instructed. Keep copies of everything you mail or upload.

## What not to do

- Do not call a “fresh start” ad that guarantees a settlement percentage. Outcomes depend on your assets, income, and compliance — not a slogan.
- Do not file an Offer in Compromise as a first reflex. Many notices are resolved by correcting a return or paying over time.
- Do not assume a spouse or old address means the IRS “has it wrong” without checking transcripts.

## How we can help

NB Tax and Advisory, CPA reviews notices, helps you understand what the IRS is asking, and, when appropriate, represents you under Form 2848. Tax relief work — unfiled years, balances, installment agreements, penalty requests — stays coordinated with accurate filings.

If a letter is sitting on your desk, bring the notice (all pages) and the related year return to a conversation. [Call](/contact/) or book a consultation. Early, organized responses are usually calmer than last-week scrambles.
`,
  },
  {
    slug: "documents-to-gather-before-tax-season",
    title: "Documents to gather before tax season",
    description: "A practical preseason document list for individuals and small-business owners — educational checklist, not advice.",
    date: "2026-03-03",
    tags: ["tax season", "checklists", "organization"],
    content: `
Tax season goes more smoothly when documents arrive in one organized batch instead of a months-long drip. You do not need a perfect binder on January 1. You do need a habit of collecting the pieces that actually change a return.

This list is educational. Your forms depend on your job, investments, family, and entities. Use it as a starting point; skip what does not apply.

## Identity and filing basics

- Prior-year federal and state returns (PDF is fine)
- Social Security numbers or ITINs for you, your spouse, and dependents
- Bank account and routing number if you want direct deposit or withdrawal
- Address and filing status changes (marriage, divorce, move, dependents)

If you used a different preparer last year, a complete copy of that return is one of the most useful things you can send.

## Income forms that usually arrive in January

- **W-2** from each employer
- **1099-NEC** and **1099-MISC** for contractor or other payments
- **1099-INT**, **1099-DIV**, and brokerage **1099-B** packages
- **1099-R** for retirement distributions
- **SSA-1099** for Social Security
- **1099-G** for unemployment or state refunds
- **K-1** from partnerships, S-corps, trusts, or estates (these often arrive later than W-2s)
- Cryptocurrency or other digital-asset year-end reports, if you had activity

Do not assume “I did not get a form, so I do not have to report it.” Many payments are still taxable.

## Adjustments, credits, and deductions — only if they apply

- Form **1098** mortgage interest and real-estate taxes
- Student loan interest (**1098-E**) and tuition (**1098-T**) plus books if relevant
- Childcare provider name, address, EIN/SSN, and amounts
- Health coverage forms (**1095** series) and HSA contributions (**5498-SA** / **1099-SA**)
- Charitable acknowledgments if you itemize
- Estimated tax payment records (federal and state dates and amounts)
- IRA or HSA contribution receipts for the year, including any made by the deadline for the prior year

## If you have a business, rental, or side activity

- Year-end profit-and-loss and balance sheet, or a clean export from your bookkeeping app
- Bank and credit-card year summaries
- 1099s you **issued** (and evidence they were filed)
- Vehicle mileage log if you use the standard mileage method
- Home-office measurements and related expenses if you claim that deduction
- Asset purchases (equipment, computers) with dates and amounts
- Payroll reports and owner-draw or distribution lists for entities

## If IRS or state notices are in the mix

Include every page of any notice received during the year, plus proof of payments already made. Catch-up filings and tax relief work need a different stack than a clean annual return — see our [tax relief intake checklist](/resources/checklists/).

## How to send it without chaos

A shared folder or client portal with clear file names (\`2025-W2-Acme.pdf\`) beats a 40-message text thread. One short cover note — “new freelance client in March, refinanced in July, still waiting on K-1” — saves days of back-and-forth.

NB Tax and Advisory, CPA is a virtual firm. Secure upload and a phone or video conversation are the normal workflow. If you want a printable version of intake lists, use the [client document checklists](/resources/checklists/) and then [reach out](/contact/) when you are ready to engage.
`,
  },
  {
    slug: "quarterly-deadlines-overview",
    title: "Quarterly tax deadlines: a year-round overview",
    description: "Federal quarterly estimated-tax and common business due dates, with 2026 examples — educational only.",
    date: "2026-03-20",
    tags: ["deadlines", "estimated tax", "payroll"],
    content: `
“Tax day” in April is only one date on a working calendar. Estimated taxes, payroll deposits, information returns, and entity filings each have their own rhythm. Missing one date can create penalties even when the underlying tax is later paid in full.

This overview is educational and focuses on **federal** calendar-year patterns, with **2026** examples. Weekend and holiday rules can shift a due date to the next business day. Confirm current dates on IRS.gov and your state's site.

## Individual estimated taxes

If you expect to owe tax beyond withholding — common for freelancers, investors, and some landlords — the IRS generally wants tax paid during the year. For **2026** estimates the usual dates are April 15, June 15, September 15, and January 15 of the following year.

Those four dates are **not** equal three-month blocks. The second “quarter” is only two months (April and May). People who annualize income because work is seasonal should not blindly divide by four without looking at the period rules.

See also [estimated taxes for freelancers](/resources/blog/estimated-taxes-for-freelancers/) and our [key federal tax deadlines](/resources/tax-deadlines/) page.

## Payroll — more frequent than quarterly for many employers

Employers deposit withheld income tax and FICA on a monthly or semiweekly schedule based on lookback rules. **Forms 941** are generally due the last day of the month after each calendar quarter (April 30, July 31, October 31, January 31). Some small employers file **Form 944** annually instead.

S-corporation owner wages are still payroll. “I will catch up deposits next quarter” is how deposit penalties start.

## Information returns (W-2, 1099)

Recipient copies of many information returns are generally due **January 31**. E-file due dates to SSA or IRS can differ by form. If you paid contractors, build a December habit: collect W-9s before you need them, and do not wait until February to discover a missing TIN.

## Entity filing dates (calendar year)

Typical federal patterns:

- **Partnerships (Form 1065)** and **S-corporations (Form 1120-S)**: generally the 15th day of the third month (mid-March). For 2026 that is often March 16 because March 15 falls on a Sunday.
- **C-corporations (Form 1120)**: generally the 15th day of the fourth month (mid-April).
- **Extensions** give more time to **file**, not more time to **pay** what you reasonably owe.

State franchise or LLC fees may land on different days. New York and other states have their own estimated-tax and filing calendars.

## A simple year-round habit

1. Put the four estimated-tax dates, quarterly 941 dates, and March/April entity dates on one calendar in January.
2. After each quarter close, reconcile books within two to three weeks — not the week a form is due.
3. Midyear, compare year-to-date profit and withholding to last year's tax. Adjust estimates or W-4 withholding if the year changed.
4. In December, list 1099 recipients and major asset purchases while memory is fresh.

NB Tax and Advisory, CPA helps clients connect bookkeeping, payroll, estimates, and filings so dates are visible before they become notices. If your calendar is only “sometime in April,” [start a conversation](/contact/).
`,
  },
  {
    slug: "home-office-deduction-basics",
    title: "Home office deduction basics (simplified method)",
    description: "A plain-language introduction to the simplified home office method for qualifying business use of a home.",
    date: "2026-04-08",
    tags: ["home office", "self-employment", "deductions"],
    content: `
Working from the kitchen table is not automatically a tax deduction. The home office rules ask whether part of your home is used **regularly and exclusively** for business, and whether that use is your principal place of business (or meets another qualifying test). Employees generally cannot take an unreimbursed home office deduction on a federal individual return under current law — this conversation is mostly for **self-employed** people and some partners.

This is a simplified educational overview, with emphasis on the **simplified method**. It is not a determination that you qualify.

## Exclusive and regular use, in ordinary words

**Exclusive** means the space is used for business, not also as a guest room, family TV corner, or kids' homework desk. A dedicated spare room is the classic example. A laptop on a dining table that becomes dinner every night usually fails exclusivity.

**Regular** means ongoing business use, not a few days a year.

The space also generally needs to be your **principal place of business**, a place you meet clients in the normal course of business, or a separate structure. Administrative-office facts matter for people who also work at client sites. These tests are factual; photographs and a simple floor plan often help a later conversation.

## Two computational paths

Taxpayers who qualify typically choose between:

- **Simplified method.** A prescribed rate per square foot of qualified space, up to a square-foot cap set by the IRS. Recordkeeping is lighter: you still need to show qualification and square footage, but you do not allocate rent, utilities, insurance, and depreciation on Form 8829 the same way.
- **Regular method.** Allocate actual home expenses (and depreciation if you own) between business and personal use. This can produce a larger or smaller deduction depending on costs, and it adds basis and recapture complexity when you sell the home.

Neither method creates a deduction if you do not qualify. A larger number is not “better” if it is not supported.

## Why people choose simplified

- Renters and owners who dislike allocating every utility bill
- Modest square footage where the extra math would not change much
- A desire to avoid depreciation recapture issues tied to the regular method
- Cleaner files for a first-year freelance practice

The simplified method is not always the highest deduction. High housing costs and a clearly exclusive room can make the regular method worth modeling — with eyes open about future sale effects.

## Records worth keeping either way

- Square footage of the office and of the home
- A simple sketch or notes on exclusivity
- Evidence the business exists (invoices, a business license, a website, bank activity)
- For the regular method: mortgage interest or rent, utilities, insurance, repairs, and Form 1098

Daycare and inventory-storage exceptions exist and have different exclusivity rules. Do not force those facts into a standard office story.

## How this fits a return

On a sole-proprietor return, a home office deduction generally lives with Schedule C (via the simplified worksheet or Form 8829). It can affect net profit and therefore self-employment tax. It is not a stand-alone “credit.”

NB Tax and Advisory, CPA will ask how you actually use the space — not how a blog said you could measure it. If you are self-employed and wondering whether a spare room qualifies, describe the room and your work pattern when you [contact the firm](/contact/).
`,
  },
  {
    slug: "w-2-vs-1099-what-changes",
    title: "W-2 vs 1099: what actually changes",
    description: "How employee wages and contractor pay differ for withholding, self-employment tax, and records — educational comparison.",
    date: "2026-04-22",
    tags: ["W-2", "1099", "self-employment"],
    content: `
The same dollar of work can look very different on a tax return depending on whether you are paid as an **employee (W-2)** or as an **independent contractor (often 1099-NEC)**. The label is not a style choice. It is supposed to follow the facts of control, opportunity for profit, and how the work is offered.

This article explains common tax differences. It is not a worker-classification opinion for your role, and it is not a suggestion to switch status to “save tax.”

## Withholding and estimated tax

**W-2:** The employer withholds federal income tax, Social Security, and Medicare from your paycheck. You may still owe more (or get a refund) when you file, but a large part of the year's tax has already been remitted.

**1099 contractor:** The payer generally does not withhold income tax or FICA. You are responsible for income tax and **self-employment tax** on net earnings. That is why estimated payments show up so often for freelancers. See [estimated taxes for freelancers](/resources/blog/estimated-taxes-for-freelancers/).

A person can have both in the same year: a job with a W-2 and a side practice with 1099s. Withholding on the job can sometimes cover part of the side income if you adjust Form W-4 — another planning conversation, not an automatic rule.

## Self-employment tax vs employee FICA

Employees and employers each pay a share of Social Security and Medicare on wages (subject to the Social Security wage base). Contractors generally pay both shares through self-employment tax on **net** earnings (after the 92.35% adjustment), with a corresponding above-the-line deduction for the employer-equivalent portion.

That is a structural difference, not a slogan that “1099 always costs more” or “W-2 always costs more.” Benefits, expenses, and unemployment coverage also change.

## Expenses you can deduct

Employees generally cannot deduct unreimbursed job expenses on the federal individual return under current rules. Contractors report business income and ordinary, necessary expenses on Schedule C (or through an entity). Home office, software, contractor payments you make, and business travel are evaluated under business-expense rules — they are not automatic.

Mixing personal and business spending in one account makes this harder. Clean books help more than a shoebox of receipts in March.

## Benefits and protections (beyond the 1040)

Classification also affects unemployment insurance, workers' compensation, employer retirement plans, and job protections. A payer who treats a worker as a contractor to avoid payroll may create risk for **both** sides if the facts look like employment. The IRS, state labor departments, and state tax agencies can each ask questions.

## Forms you should expect

- Employee: Form **W-2**
- Contractor: Form **1099-NEC** if payments meet reporting thresholds (and you should still report income even if a form is missing)
- Other 1099s (MISC, K, etc.) mean different kinds of payments — read the box labels

If you hire help in your own practice, collecting W-9s and issuing 1099s is part of being the business, not optional paperwork.

## How we talk about it with clients

NB Tax and Advisory, CPA prepares returns for employees, contractors, and people who are both. We also help small businesses think through payroll versus contractor payments when they are building a team. We will not invent a classification to chase a lower rate.

If your pay type changed this year — first 1099, first W-2 after years of freelance, or both — bring last year's return and this year's forms to a [consultation](/contact/).
`,
  },
  {
    slug: "offer-in-compromise-who-it-may-fit",
    title: "Offer in Compromise: who it may fit (high level)",
    description: "A high-level introduction to IRS Offer in Compromise — when it is sometimes considered, and when it usually is not.",
    date: "2026-05-12",
    tags: ["Offer in Compromise", "tax relief", "IRS"],
    content: `
An **Offer in Compromise (OIC)** is an IRS program that sometimes lets a taxpayer settle a tax debt for less than the full balance. Ads often make it sound like a coupon. In practice it is a financial disclosure, a calculation of what the IRS considers collectible, and a compliance test. Many offers are returned or rejected.

This is a high-level orientation. It is **not** an evaluation of your case and not a promise that an offer will be accepted.

## What the IRS is generally weighing

The common “doubt as to collectibility” offer asks whether the IRS can reasonably collect the full balance from your assets and future income. Broadly, the agency looks at:

- **Equity in assets** (bank accounts, vehicles, real estate, investments), with allowed quick-sale and exemption-type adjustments
- **Monthly disposable income** after IRS-allowed living expense standards (which may be lower than your actual budget)
- How many months of that disposable income they include
- Whether required returns are **filed** and estimated taxes or withholding are current

If the math says the IRS can collect more than you are offering — through levy, installment agreement, or waiting — an offer is an uphill climb.

## Who may be a candidate worth evaluating

Facts that sometimes support a serious look (not a guarantee):

- A balance that is large relative to equity and earning power
- Limited assets that are not easily converted
- Income that barely covers allowed living expenses
- Compliance is current or can be brought current (missing returns are often a blocker)
- Other collection options (installment agreement, currently not collectible) do not solve the problem in a realistic way

People with substantial home equity, stable high income, or unfiled years usually need a different first conversation.

## Who usually should not start here

- You can full-pay within a reasonable time, including through an installment agreement
- You have not filed required returns
- You can pay but dislike the balance — hardship and collectibility are not the same as inconvenience
- You were told “settle for pennies” on a phone sales call without a financial statement

There are also **doubt as to liability** and **effective tax administration** flavors of offer. Those are narrower and fact-heavy. Do not force them onto a simple “I owe too much” situation.

## Process realities

An offer generally requires Form 656, a collection information statement (Form 433-A (OIC) and/or 433-B (OIC)), supporting documents, and application fees or initial payments under the rules in effect when you apply. Collection activity may pause in some respects while a processable offer is pending — that is not a reason to file a thin offer just to buy time.

If an offer is rejected, appeal rights may exist. If it is accepted, you typically must stay compliant for a period of time or the agreement can default.

## How this firm talks about OIC

NB Tax and Advisory, CPA evaluates tax relief options in order: get filings current, understand transcripts and collectibility, then compare installment agreements, penalty relief, currently-not-collectible status, and — when the numbers support it — an Offer in Compromise. We do not advertise a settlement percentage.

If you have a balance and want a candid options review, gather notices, recent returns, and a snapshot of assets and income, then [contact the firm](/contact/). For related reading, see [penalty abatement](/resources/blog/penalty-abatement-reasonable-cause/) and [Form 2848 representation](/resources/blog/how-form-2848-representation-works/).
`,
  },
  {
    slug: "year-end-tax-planning-checklist",
    title: "Year-end tax planning checklist",
    description: "A practical late-year planning list for individuals and small-business owners — education, not a personalized plan.",
    date: "2026-08-26",
    tags: ["tax planning", "year-end", "checklist"],
    content: `
November and December are when many tax decisions can still change the current year — and when a rushed choice can be hard to undo. A short, organized review beats a January wish list.

This checklist is educational. Dollar limits, phaseouts, and elections change by year and by your facts. Confirm 2026 amounts with current IRS figures or a CPA before you act.

## 1. Look at this year as it actually is

- Year-to-date wages, withholding, and freelance profit
- Large one-time items: bonus, equity compensation, a property sale, a retirement distribution
- Prior-year return as a baseline (and any carryforwards)
- State residency or remote-work changes during the year

If you have no idea what year-to-date profit is, start with bookkeeping. Planning on a guess is how estimates and withholdings miss.

## 2. Retirement and health accounts

- Workplace plan deferrals (and catch-up if you are eligible)
- IRA and Roth IRA eligibility and contribution timing (some contributions can be made after December 31 for the prior year)
- HSA eligibility and family vs. self-only coverage
- SEP or solo 401(k) conversations for self-employed people — deadlines differ by plan type

Traditional vs. Roth is a separate design question. See [choosing Traditional vs Roth contributions](/resources/blog/traditional-vs-roth-contributions/).

## 3. Business owners and S-corps

- Owner wages vs. distributions for the year (reasonable compensation is a facts pattern, not a December journal entry)
- Equipment and software purchases: placed-in-service dates matter; “I ordered it” is not always “I placed it in service”
- 1099 vendor list and W-9 collection
- Estimated tax: is the January payment still needed, or will withholding cover it?
- Health insurance reporting for more-than-2% S-corp shareholders

## 4. Charitable giving and itemizing

Bunching gifts, donor-advised funds, and non-cash contributions have documentation rules. A last-week transfer needs a paper trail. If you will take the standard deduction, extra itemized spending may not change federal tax the way a headline suggests.

## 5. Investments and digital assets

Tax-loss harvesting, wash-sale awareness, and mutual-fund capital-gain distributions are year-end classics. So is checking that your 1099-B will match your records. Cryptocurrency transfers between wallets are easy to forget and hard to reconstruct in March.

## 6. Family and life events

Marriage, divorce, dependents, college, and a move between states all change next April's return. Update Form W-4 if withholding no longer matches the household.

## 7. Compliance loose ends

- Unfiled prior years (year-end is a good time to stop the clock on another missing return)
- IRS notices sitting unanswered
- Payroll deposits that slipped
- Entity annual reports and state fees

## A sane way to use this list

Pick five items that apply. Write the current number next to each (profit, withholding, planned contribution). Then decide what must happen **before December 31** versus what can wait until the filing-season deadline.

NB Tax and Advisory, CPA does year-round planning conversations — not only a December fire drill. If you want a structured review before year-end, [book a consultation](/contact/) while there is still calendar left.
`,
  },
  {
    slug: "bookkeeping-habits-that-make-filing-easier",
    title: "Bookkeeping habits that make filing easier",
    description: "Lightweight bookkeeping habits for freelancers and small businesses so tax filing is cleaner and faster.",
    date: "2026-06-09",
    tags: ["bookkeeping", "small business", "organization"],
    content: `
You do not need a full-time controller to hand a CPA a usable year. You need a few habits that keep money stories consistent. Most filing delays are not exotic tax law. They are missing statements, mixed personal charges, and a profit-and-loss that does not match the bank.

This is educational practice design, not a bookkeeping engagement proposal.

## 1. Separate business money from personal money

A dedicated checking account (and a card used only for the business) is the highest-leverage habit there is. When rent, groceries, and client software share one account, every filing season becomes forensic work.

Owner draws or distributions should be labeled as such — not buried as “miscellaneous expense.” Paying yourself is not a Schedule C deduction.

## 2. Reconcile monthly, not annually

Once a month, match the bank and credit-card accounts to the register in your bookkeeping app or spreadsheet. Fifteen minutes in July beats a weekend in March. Reconciliation is how duplicate downloads, missing weeks, and “I thought that was categorized” get caught.

If you cannot reconcile, the year-end P&L is not reliable enough to estimate tax or to sign a return comfortably.

## 3. Use a short, stable chart of accounts

Income, contractor costs, software, rent, meals (if any), travel, owner pay, taxes paid. That is enough for many small practices. A 200-line chart copied from a big-company template creates false precision and inconsistent tagging.

Rename the leftover “Ask my accountant” bucket every month until it is empty.

## 4. Capture the facts software cannot see

- Mileage (date, destination, business purpose, miles) if you use the standard mileage method
- Home office square footage and exclusivity notes
- Loan statements vs. merchant cash advances
- Who you paid that may need a 1099, and their W-9
- Asset purchases: date placed in service, amount, description

A receipt that only says “Amazon” is not a complete story.

## 5. Close the quarter on a schedule

Within two or three weeks after March 31, June 30, September 30, and December 31:

- Reconcile accounts
- Scan for personal charges to reclassify
- List new vendors
- Compare profit to last quarter (and to estimated-tax payments already made)

This is also when payroll and sales-tax filings should already be on a calendar.

## 6. Keep a one-page year memo

Three sentences help a preparer more than another folder of screenshots: “Started contracting in April. Bought a laptop in August. Moved from New Jersey to New York in November.” Life events are tax events when they change residency, filing status, or the set of forms.

## 7. Send a package, not a puzzle

When it is time to file, export a P&L, balance sheet if you have one, payroll reports, 1099s issued, and the income forms you received. Name files by year and type. The [preseason document list](/resources/blog/documents-to-gather-before-tax-season/) and [checklists](/resources/checklists/) spell this out.

NB Tax and Advisory, CPA offers bookkeeping support alongside tax preparation because clean books are how accurate returns happen. If your current system is a shared inbox and a hope, [call](/contact/) and we can talk about a right-sized setup — virtual and practical, not theatrical.
`,
  },
  {
    slug: "multi-state-remote-worker-tax-basics",
    title: "Multi-state and remote-worker tax basics",
    description: "High-level introduction to residency, sourcing, and remote-work state tax issues — education, not a residency opinion.",
    date: "2026-06-24",
    tags: ["multi-state", "remote work", "residency"],
    content: `
Remote work made state line-crossing ordinary. Tax systems did not fully simplify to match. You can be a **resident** of one state, earn **sourced** income in another, and need more than one state return — or a credit to limit being taxed twice on the same income.

This is a high-level map. Residency and sourcing are factual and state-specific. Reciprocity agreements, convenience-of-the-employer rules, and local taxes (New York City is a familiar example) can change the answer.

## Residency is not “where my laptop was in June”

States generally look at **domicile** (your true, permanent home) and, in many cases, **statutory residency** (certain day-count plus a living place). Selling a house, getting a new driver's license, or changing your mailing address helps tell the story — it does not automatically end the old state's claim.

If you left New York but kept an apartment, a business registration, or family ties, expect questions. If you moved into New York, expect the reverse.

Keep a simple day count if you split time. Calendar notes beat reconstruction from boarding passes six months later.

## Where the work is sourced

Wages are often sourced to the state where the services are performed — but not always. Some states have “convenience of the employer” type rules that can source telework to the employer's location unless the remote arrangement is for the employer's necessity. Other states have reciprocity so border commuters file mainly in their home state.

Contractors and business owners follow different sourcing ideas (where the service is performed, where the customer is, or a multi-factor apportionment formula). A single remote consulting practice can still create filing duties in more than one state if facts line up that way.

## What often changes on a return

- Part-year resident returns in the year you move
- Nonresident returns where wages or business income are sourced
- A resident credit for taxes paid to another state (formulas and limitations vary)
- City or school-district taxes on top of state tax
- Withholding: a W-2 that withholds only for the employer's state may not match where you lived

Unemployment, paid-family-leave, and local filings can follow different maps than the income-tax return.

## Remote teams and the employer's side

If you hire or stay employed across state lines, **payroll withholding registration** may be required in the employee's state. That is an employer compliance issue, not only the worker's April problem. S-corps and LLCs with members in multiple states have their own apportionment and composite-return questions.

## A practical midyear habit

When your work location, employer office policy, or home state changes, write down the effective date and what changed. Adjust W-4 state withholding if needed. Do not wait until a 1099 or W-2 arrives that looks “wrong” because nobody told payroll you moved.

NB Tax and Advisory, CPA is a **virtual New York–licensed** firm that works with clients nationwide. Multi-state facts come up often for remote employees and mobile freelancers. We will not invent a residency position to dodge a state; we will help you file consistent, supportable returns.

If you split the year between states or your employer is in one state and you work in another, bring both addresses, a day-count if you have one, and last year's returns to a [conversation](/contact/).
`,
  },
  {
    slug: "penalty-abatement-reasonable-cause",
    title: "Penalty abatement: a reasonable-cause introduction",
    description: "How IRS penalty relief and first-time abatement generally work at a high level — educational, not a request on your behalf.",
    date: "2026-07-15",
    tags: ["penalties", "tax relief", "reasonable cause"],
    content: `
IRS penalties (failure to file, failure to pay, failure to deposit, estimated-tax, information-return) can rival the tax itself when a problem sits for years. **Abatement** means asking the IRS to remove a penalty when a program or the facts support it. Tax and interest are different conversations.

This introduction is educational. It is not a filing, and it is not a prediction that your penalties will be removed.

## Two doors people hear about

**First-time penalty abatement (FTA)** is an administrative waiver the IRS may grant for certain failure-to-file, failure-to-pay, and failure-to-deposit penalties when you have a clean penalty history for the lookback period, are otherwise compliant, and meet the program's current conditions. It is not available for every penalty type, and the IRS can change procedures.

**Reasonable cause** is a facts-and-circumstances argument: you tried to meet the requirement, and events outside ordinary care — serious illness, a death in the family, a disaster, records that were inaccessible despite effort, reliance on incorrect professional advice in limited situations — kept you from complying. Ordinary forgetfulness, “I did not have the money,” or “tax software was confusing” often fail as reasonable cause by themselves. Inability to pay can be relevant to some failure-to-pay analyses but is not a magic phrase.

You generally need to **correct the underlying problem** (file the return, pay or arrange the tax) for relief conversations to go anywhere.

## What a serious request usually includes

- The exact penalty, tax period, and notice
- A dated explanation in ordinary language
- Documents that support the story (hospital records, disaster declarations, proof you filed when able, proof of payment)
- Evidence of current compliance (other required returns filed; deposits back on schedule)

A two-sentence email that says “please remove all penalties” is not a request. Neither is copying a template that does not match your dates.

## What usually does not work

- Blaming the IRS for not reminding you to file
- Incarcerating a prior preparer in the narrative without showing what you did once you knew
- Asking for abatement while several years remain unfiled
- Assuming FTA applies to an information-return or accuracy-related penalty it does not cover

Interest generally keeps running on unpaid tax even when a penalty is removed. Paying tax and asking for penalty relief can be parallel tracks.

## How this fits tax relief work

Penalty relief is often one piece next to catching up unfiled returns, setting an installment agreement, or evaluating currently-not-collectible status. Sometimes removing a failure-to-file penalty changes whether a payment plan is realistic. Sometimes the better first move is simply to file and stop the next year's penalty from stacking.

NB Tax and Advisory, CPA can review notices, explain which penalties appear, and, when the facts support it, request relief — including as part of Form 2848 representation. We will not promise that the IRS will abate an amount you saw in an advertisement.

If penalties are a large share of what you owe, send the notices and a brief timeline of what happened when you [contact the firm](/contact/).
`,
  },
  {
    slug: "traditional-vs-roth-contributions",
    title: "Choosing Traditional vs Roth contributions (general)",
    description: "A general comparison of Traditional and Roth retirement contributions — educational framing, not investment advice.",
    date: "2026-07-29",
    tags: ["retirement", "Roth", "tax planning"],
    content: `
Traditional and Roth accounts are two different timings for tax. One often reduces taxable income now and is taxed later. The other is usually funded with after-tax dollars and, if rules are met, qualified withdrawals are tax-free later. The “right” mix depends on your current bracket, expected future income, account type, and how long the money will stay invested.

This is general education — **not investment advice, not a product recommendation, and not a projection of your retirement**.

## Traditional (pre-tax) in brief

Workplace **traditional 401(k)/403(b)** deferrals usually reduce taxable wages on the W-2. **Traditional IRA** deductibility can phase out if you (or a spouse) are covered by a workplace plan and income is above IRS limits for the year.

You generally pay ordinary income tax when you take taxable withdrawals. Required minimum distributions apply to most traditional workplace and IRA accounts at ages set by current law.

## Roth in brief

**Roth 401(k)** deferrals do not reduce current taxable wages. **Roth IRA** contributions are never deductible; the ability to contribute directly phases out at higher incomes (backdoor or other strategies are separate, fact-specific conversations).

Qualified distributions — account open for the required holding period and a qualifying event such as age 59½ — are generally tax-free. Roth IRAs do not have lifetime RMDs for the original owner under current rules; Roth 401(k) RMD rules have been changing, so check the year you are in.

## Questions that actually help a decision

- **Do you want a deduction this year?** High current income and a desire to lower taxable income push many people toward traditional deferrals — if they can afford the cash.
- **Do you expect higher tax later?** Younger workers or people between jobs sometimes prefer Roth. People who will have large traditional balances and RMDs sometimes add Roth for flexibility.
- **Do you need the deduction to make the savings happen?** A tax refund is not the only reason to save, but cash-flow is real.
- **Are you near a credit or surcharge cliff?** Extra MAGI can affect premium tax credits, IRMAA, student aid formulas, or other phaseouts. Sometimes a Roth contribution (which does not lower MAGI the same way) is the wrong tool for a cliff; sometimes a traditional deferral is exactly the tool.
- **What does the plan actually offer?** Not every employer offers a Roth 401(k). IRA income limits are not the same as 401(k) limits.

## Mixing is allowed

Many households contribute to both over a career. A year of traditional deferrals and a later Roth conversion (taxable) is a planning sequence, not a contradiction. Conversions have their own timing, state-tax, and estimated-tax effects.

## Limits and catch-ups change

Annual contribution limits, catch-up ages, and MEGA-backdoor or after-tax plan features are year-specific. For **2026** planning, use the IRS and plan-document numbers for 2026, not a memory of 2023.

Employer matches are typically pre-tax even if you elect Roth deferrals (unless the plan offers a Roth match under newer optional rules). Read the plan summary; do not assume.

## How we use this in planning

NB Tax and Advisory, CPA will look at this year's return, your workplace plan menu, and large upcoming events (a business sale, a move, a year off). We do not pick funds or promise a retirement lifestyle. We help you see the tax timing.

If you are choosing a deferral election before year-end, bring a recent pay stub, last year's return, and the plan's contribution options to a [consultation](/contact/).
`,
  },
  {
    slug: "how-form-2848-representation-works",
    title: "How Form 2848 representation works (client-friendly)",
    description: "A client-friendly explanation of IRS Form 2848 power of attorney — what it authorizes, and what it does not.",
    date: "2026-08-11",
    tags: ["Form 2848", "IRS representation", "tax relief"],
    content: `
**Form 2848**, Power of Attorney and Declaration of Representative, is how you authorize a qualified professional — including a CPA — to talk to the IRS about specified tax matters. It is not a general power over your bank accounts, and it is not a guarantee of a particular outcome. It is a permission slip with edges.

This walkthrough is for clients who have been asked to sign one and want to know what they are signing.

## What a Form 2848 typically lets us do

On the matters and years listed, a recognized representative can generally:

- Call the IRS and authenticate on those issues
- Request account transcripts
- Receive copies of notices (if you check the right boxes and CAF processing has completed)
- Discuss proposed adjustments, collection alternatives, and missing filings
- Submit responses and agreements you have approved

The form asks for tax **type** (income, employment, etc.) and **years or periods**. A 2848 for 2023 income tax does not automatically cover 2021 employment tax. Being precise protects you.

## What it does not do

- It does not let the firm withdraw money from your accounts.
- It does not replace your obligation to file or to tell the truth on a return.
- It does not stop every collection action the day you sign. Processing takes time, and some notices still require a separate response.
- It does not authorize representation before other agencies unless those agencies have their own process (states usually need their own POA).
- It does not last forever in a useful way if years expire or you revoke it.

You can revoke a power of attorney. You can also limit it. If something on the draft does not match what you want, say so before you sign.

## How the process usually goes

1. We agree on the scope: which years, which tax types, and why (a notice, unfiled returns, a balance, an exam).
2. You review Form 2848. Signatures have specific rules; the IRS has been particular about electronic vs. wet signatures depending on how the form is submitted.
3. The form is faxed or submitted to the IRS CAF (Centralized Authorization File) unit.
4. After processing, we can authenticate on the phone or through IRS online tools that accept third-party access.

Until CAF updates, a well-meaning call can still hit a wall. That lag is normal, not a sign the form “failed.”

## Why representation helps in real life

IRS hold times and notice language are a part-time job. A representative who has transcripts and a plan can answer a balance-due call with facts instead of fear. For tax relief — installment agreements, penalty requests, levy questions — Form 2848 is often the difference between you repeating your Social Security number to a new assistor and a coordinated response.

See [what to do when you get an IRS notice](/resources/blog/what-to-do-when-you-get-an-irs-notice/) and the [tax relief](/tax-relief/) overview.

## Your job after you sign

Stay reachable. Send requested documents. Do not start a second, conflicting conversation with the IRS that you forget to mention. If you receive a new notice, forward all pages — even if you think we already “have the account.”

NB Tax and Advisory, CPA provides Form 2848 representation as part of tax and tax-relief engagements when it fits. We will explain the years on the form in plain language before you sign.

If you want the IRS to speak with a New York CPA instead of with you at work, [call the firm](/contact/) and we will talk through whether representation is the right next step.
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function excerpt(content: string, max = 170): string {
  const plain = content
    .replace(/^#+\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

