import React, { useLayoutEffect } from 'react'
import classes from "./RiskDisclosure.module.css";

export default function RiskDisclosure() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      <div className="container my-5">
        <div>
          <b className={`fs-1 mb-5 ${classes.heading1}`}>Risk Disclosure</b>
        </div>
        <div className={`my-4`}>
          <p>
            Newscrypto.io is not a registered broker, analyst, investment advisor or anything of that sort. Everything that we provide on this site is purely for guidance, informational and educational purposes. Trading cryptocurrencies can be a challenging and potentially profitable opportunity for investors. However, before deciding to participate in the crypto market, you should carefully consider your investment objectives, level of experience, and risk appetite. Most importantly, do not invest money you cannot afford to lose. Before investing you should also seek advice from an independent and suitably licensed financial advisor to ensure that you have the capability to take a certain level of risk and have the required knowledge about financial and cryptocurrency markets before you start any trading activity.
          </p>
          <h5>Disclaimer</h5>
          <p>Newscrypto.io will not accept any liability for loss or damage as a result of reliance on the information contained within this website including written content, links to third party sites, data, quotes, charts and buy/sell signals. Please be fully informed regarding the risks and costs associated with trading assets on the financial markets. Our content is intended to be used and must be used for informational purposes only. It is very important to do your own analysis before making any investment or getting involved in a crypto project based on your own personal circumstances. None of the content published on this site constitutes a recommendation that any particular cryptocurrency, portfolio of cryptocurrencies, transaction or investment strategy is suitable for any specific person.</p>
          <h5>Sector risks</h5>
          <p>As mentioned, there are many different types of risks associated with cryptocurrency and engaging in the financing of transactions in digital assets. Tokens can be built on a variety of technologies and they can represent a variety of use cases ranging from simple to complex. There is no one standard definition for a “token” or “ICO”. Please be aware of the following specific sector risks before getting involved in any crypto or blockchain based project found on our site or elsewhere.</p>
          <ol>
            <li>
              <h5>Fraud</h5>
              <p>The crypto space is still largely unregulated. This allows for unlawful projects to be launched in a quest to raise funds for a project which was never intended to deliver on any of its promises. In these instances contributors often lose 100% of their contribution. It is important to conduct thorough due diligence on all crypto projects. You should thoroughly research the team and advisory board behind all projects you&#39;re interested in.Please be aware, that It&#39;s often not enough to simply look at the profiles listed on the project&#39;s website, as some fraudsters have taken to using fake identities, fake social profile accounts and listing fake work histories and work experiences. In other cases, fraudsters have used real identities of people who are not associated with their project.
              </p>
            </li>
            <li>
              <h5>Hacks</h5>
              <p>While it is less likely a blockchain will be hacked, there is a greater potential for hacks on the system layers that exists above the blockchain layer. For example, applications such as wallets, browsers, websites or software programs are all common targets for hackers. These hacks often lead to a substantial loss of funds for both the token issuer and the token purchaser. Please be aware that many blockchain projects are uninsured which will likely result in the complete loss of your funds in the event your the victim of a hack.</p>
            </li>
            <li>
              <h5>Project Abandonment</h5>
              <p>There is also a risk that some crypto projects could become abandoned. This may happen for a variety of reasons including but not limited to; lack of interest from the public or developers, unfavorable regulations, failures in technology or lack of funding. If a project becomes abandoned,the tokens associated with it will often become illiquid or void of any real value.</p>
            </li>
            <li>
              <h5>New technology</h5>
              <p>Many crypto projects found on our site use a blockchain as their underlying technology. Blockchain technology is relatively new which comes with it&#39;s own risks. To make matters even riskier, many token issuers experiment with the underlying protocols and algorithms. In the blockchain space it&#39;s not uncommon to see technology failures.
              </p>
            </li>
            <li>
              <h5>3rd Party Underlying Protocol Failure</h5>
              <p>Many crypto projects execute their project on top of existing blockchains. Common blockchains include, but are not limited to, Bitcoin, Ethereum, NXT and Stellar. Therefore, many crypto projects rely on the proper functioning of these underlying blockchains. However, issues such as forks, system failures, project abandonment or newer technologies such as quantum computing could introduce new risks for these underlying blockchains and therefore the projects built on top of them.</p>
            </li>
            <li>
              <h5>Mining Attacks</h5>
              <p>Early stage blockchain projects come with increased levels of risk. Blockchain protocols often use algorithms (such as Proof Of Work or Proof Of Stake) which help protect the network. While, these algorithms and others have proven to be quite secure, there is a risk with early stage projects which don&#39;t have a balanced distribution of miners. In these instances a project could find themselves with miners who are bad actors and could engage in activity, such as majority mining power attacks, that would reduce the value of the platform or network to zero.
              </p>
            </li>
            <li>
              <h5>Extreme Volatility</h5>
              <p>Crytocurrencies have traditionally been incredibly volatile assets. This has many implications for the ICO and Token Sale industry. The value of a project&#39;s internal token may or may not lead to increase or decreases in project progress as well as public interest in the project. Similarly, the price of the tokens used as the base currency (for fundraising) could also depreciate in value meaning the token issuer may not have the funds to complete the project.
              </p>
            </li>
            <li>
              <h5>Liquidity and risk</h5>
              <p>Trading environments of Digital Assets have different degrees of liquidity based on their popularity, trading volume, community size, and other factors. Some are easy to liquidate than others. Thin markets can amplify volatility. There is never a complete guarantee that there always will be a market for users to sell, buy, or trade Digital Assets. Furthermore, any market for tokens may abruptly appear and vanish due to malfunction, disagreement with project teams or low persistent or low trading activity. Newscrypto assumes no responsibility and provides no confirmation whether a Digital Asset that is listed on the Exchange will be tradeable on the Site at any point in the future, if at all. All Digital Assets are subject to delisting without notice or consent.
              </p>
            </li>
            <li>
              <h5>Lack of verifiable 3rd Party Audits</h5>
              <p>Token sales are often not designed as securities sales and therefore they often are not subject to the same rigorous third party verification and auditing standards.
              </p>
            </li>
            <li>
              <h5>Accidental Loss of Tokens</h5>
              <p>It is possible to lose the entire balance of your token based on many different factors. For example, if you fail to follow the exact ICO or Token Sale instructions, including providing a correct and compatible receiving address you may lose your tokens. You may also lose your tokens if you fail to write down your password, private key or passphrase (depending on the rules of each token sale). Generally, failing to follow very strict guidelines will result in the total loss of all tokens. In the majority of these cases the tokens will be forever unrecoverable.
              </p>
            </li>
            <li>
              <h5>Regulatory Risks</h5>
              <p>There is a risk that a crypto project either failed to adhere to regulatory requirements for their specific use case and technology, or new laws or regulation may conflict with their current project functioning. It&#39;s also important to realize that regulatory standards and laws change greatly between jurisdictions. It&#39;s important to study, understand and constantly update yourself on the rapidly changing regulatory landscape surrounding blockchain technology and ICOs in your jurisdiction.
              </p>
            </li>
            <li>
              <h5>Internal Team Errors or Failures</h5>
              <p>There is a risk associated with putting control of the day to day operations in the hands of the token issuer. Token price, stability and utility are often grounded in the principles of good business management. However, there is a risk that central management will fail to run the business properly.
              </p>
            </li>
            <li>
              <h5>No Legal Recourse</h5>
              <p>There is a risk associated with finding a reasonable legal remedy in the case of a dispute. it may be difficult or costly for token contributors to assert their legal right. Due to the international nature of the internet, and global commerce contributors may find it expensive or difficult to challenge the token issuer in their jurisdiction. Similarly, crypto projects often explicitly state the risks in their terms and conditions. This can make finding a reasonable legal remedy challenging.</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}
