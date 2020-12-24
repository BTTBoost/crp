const siteMetadata = {
  siteUrl: "https://crypto.buzzing.cc",
  author: `Buzzing`,
  locale: "zh",
  title: "加密货币国外热门讨论",
  shortTitle: "加密货币",
  description: "用中文浏览关于加密货币的国外热门讨论",
  keywords: ["buzzing", "加密货币", "比特币", "数字货币", "区块链"],
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],

  social: [
    {
      name: `Crypto Currency小组`,
      url: `https://www.reddit.com/r/CryptoCurrency`,
      external: true,
    },
    {
      name: "比特币小组",
      url: "https://www.reddit.com/r/Bitcoin",
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Crypto`,
      shortTitle: "BuzzCrypto",
      description: `See what's buzzing on Crypto in your native language`,
      keywords: ["buzzing", "crypto", "bitcoin", "blockchain"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/issues",
        // },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
      social: [
        {
          name: `Crypto Currency Subreddit`,
          url: `https://www.reddit.com/r/CryptoCurrency`,
          external: true,
        },
        {
          name: "Bitcoin Subreddit",
          url: "https://www.reddit.com/r/Bitcoin",
          external: true,
        },
        {
          name: `Buzzing`,
          url: `https://www.buzzing.cc/`,
          external: true,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "加密貨幣國外熱門討論",
      shortTitle: "加密貨幣",
      description: "用中文瀏覽關於加密貨幣的國外熱門討論",
      keywords: ["buzzing", "加密貨幣", "比特幣", "數字貨幣", "區塊鏈"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/issues",
        // },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],

      social: [
        {
          name: `Crypto Currency小組`,
          url: `https://www.reddit.com/r/CryptoCurrency`,
          external: true,
        },
        {
          name: "比特幣小組",
          url: "https://www.reddit.com/r/Bitcoin",
          external: true,
        },
        {
          name: `Buzzing`,
          url: `https://www.buzzing.cc/zh-Hant`,
          external: true,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
