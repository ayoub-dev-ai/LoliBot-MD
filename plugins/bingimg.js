const { BingImageCreator } = require("../lib/bingimg.js");

export const handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;

  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else {
    throw "*تخيل والبوت يرسم  مثال 😉:*\n .bingimg cat play with man";
  }

  // Two predefined cookies
  const cookies = [
    "_C_Auth=; ipv6=hit=1734178092699&t=4; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=CA6A2A78652B4323ACB5D7F7F358AB88&dmnchg=1; _SS=SID=29095A4172FC6A282FA64F1473586BBA; MUID=0D7A395CD4B661370BD72C09D5126036; MUIDB=0D7A395CD4B661370BD72C09D5126036; _EDGE_S=F=1&SID=29095A4172FC6A282FA64F1473586BBA; _EDGE_V=1; MUIDB=0D7A395CD4B661370BD72C09D5126036; _clck=1mewqzv%7C2%7Cfrp%7C0%7C1809; CSRFCookie=161c9f53-88da-4f8f-af30-e662ee170309; SRCHUSR=DOB=20241214&POEX=W; ANON=A=E8E6E348E580A5CA67DB7E1FFFFFFFFF&E=1e99&W=1; NAP=V=1.9&E=1e3f&C=KD7Y-NGBxfiQwUYeX_cSm8eZctTvsDLkE3JVvyuDHnWN7yUobd6Qxw&W=1; PPLState=1; KievRPSSecAuth=FAB6BBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACMp9C+vv9jT5OAT42RS9ZFuUFWM31bONKjUFEk3jtash8w7fc22AzjBDQsvM/Zu9/Mvjq92L5osZbuldDw+163x1sdbgE/VSLv5JNFPwFZ88xokOASNJ8YxsRTm4GCCV0WBklXfZL1BiViCd1QnPZEOXfwwpla9ic1duekokpaCy3TXjWSxSuGXWuElCdxDksHx2ZoC5QF2RjU8QWp4nuqgB1c/XVyyx1Mg5hXNCVIG6FBNRW3g11WCWiln4lfIFrejZSAJoKQfcqwFNd8wE3yR8iYfYmIOrQlBwJDwz/+7or2q+vJ1z5jijHvPX3OmR7ZzvdxBjd1ZUoIZ1QiUhKoUUicIL3EMLpHBX0+4A7SGXBRvvitv/j9e111i/SeZg3I+Ju9mdsMxCIEA53wvJE7TE7nENCWyjqJFGlfpSs53KW3HDpaNp2yotu3w/UNy8Q/qU416OpBUthkW2wJw8zT8ZbJwBRiwyM/AD0jy8ipSYKd97StrTp/PlalGA4jJhDRDsMfE3TkrTmF72/oY0OVasBO+dNvW/1WkifMl9ywUM5D/2W2GnAdOkG8UPO5QhFCpJJNrz7HsziJfUmps7U8mZVJCzatffXiCLRJ6+u8XUtFD1kLS4oNOrEo0YDiZ26VHylYWngwMQOOX9oUKRzYfBbp5OAQkYfzHZyQMYXWzkgrmZa7Z1+TkTq4j36+SrMG8k/jvPaogIoDRGw+L+TDza91KcIkTDA7dazcLwaWfTF2okNUiFYEcisgnUgvJnct0IScLb+UzSPqG+EpmQuyfLoFRgmWM+Mz+0r2b+kq8cjbWVpFQ5bPl7l83LNYk1el/h6enhLm6Z7op5pwyajfaa1mjBM9XekhN5c0Bg5jU+aFvZieaU/Lhjb+jnKbHB8iVE7VVn5q0eYf65BC6XMziavoclZnSmbIUxsWyl8oaxxGNt5ORn6Kcix/kVlz5hqJMytIoZmGW/PuqjKW9SRDr5XMiFykHwCev8Kc+ehQB1cOUvjJjnvqDEYZAJtxYeZArTL7yP5NAe7aihMrInWr+I4E1OYseyoRAAupTwdvmZBYyd0aVAbXbk7vjwVsLWwbbndd6m/ma18dnQHJ5Vu1ZpYC+BJDCO96h913r3VXLMPrq+U7OYOurnoQCkb3wPRnK+faYNG0sqAsTel3t+jAsIv09Ypdq2w/kx/Kh1bvPZ7JtOOoYEEqMUHgGoMzv2pNFU4pgv3j94oxZYz810Qfp3EV5bG/BCF0kL3+L/0Ne1gc7Y5neui9podSwu1qzcp45xi5OD9ewKMQqJZ1mqWhWEa+ZEkooV+BEA8t4i2R3oSFReKxg+Fz2TTn7f0fpw9uJJ7YeMQGhB41Mye+fi598PJ3cRhbBqZ2zuQC9WjOB5WRYzkk0fp4iaUIgilOkzBbQmrP7Q254zxK1cp9+2hVgxCtnCnqsshQ4O2nixsfoJIdcUAK2Xiarx6B08ck7/LgtMiUI+JpYS; _U=1NQaalnCatKICqDDiDfFgN0WMRqAZX4QnomP1BbxyQKmLkqay77gC1sGDncJ6--jIaY2Ox5ADiWwVJc9W-ByGsmJ1kNM_nNoKGxniMs2XewD99XIUWvs1RQlETP4Rylfk86Xjh-MhXubKqfY4taUhzZ0YXvfsIO-2R6UijqvHMKugANkx98AOOI8hssgxDTFW1wwDLD08aI15XD0NNvf-1gwFyZRDOGO01DaAzToc120; WLS=C=b69239cb8f429e80&N=Majnon; WLID=m7d6b+lJCnxQgPDYACAeLzg+uaHwjsUHHW8wthiaVyrH+Fv8ysM6y71yz9OYNb9XjyaOqLzK13Hr3OAUUTkRWl/G++M5Q0qoUE17loLoBrs=; SRCHHPGUSR=SRCHLANG=en&DM=1&CW=412&CH=745&SCW=412&SCH=745&BRW=MW&BRH=MT&DPR=1.8&UTC=60&WTS=63869771288&HV=1734174495&PRVCW=412&PRVCH=745; _clsk=ohlz8u%7C1734174550688%7C2%7C0%7Cz.clarity.ms%2Fcollect", // Full cookie #1
    "_C_Auth=; ipv6=hit=1734177943427&t=4; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=6A066713359F4B16A44672822FFF96B7&dmnchg=1; _SS=SID=3A4388072F0F6A6B29E59D492E596BF8; MUID=03A644C2B96366692AD2518CB835679B; MUIDB=03A644C2B96366692AD2518CB835679B; _EDGE_S=F=1&SID=3A4388072F0F6A6B29E59D492E596BF8; _EDGE_V=1; MUIDB=03A644C2B96366692AD2518CB835679B; CSRFCookie=96e07725-8e15-4759-98cf-0d569b7c571f; SRCHUSR=DOB=20241207&POEX=W; ANON=A=EE8D2915AFE4F5D86917265FFFFFFFFF&E=1e92&W=1; NAP=V=1.9&E=1e38&C=6Akmb5eq7p8WQLHYZMB6lyrC38am9QnwgRLQhLn7urAuFuxhNlPkwA&W=1; PPLState=1; KievRPSSecAuth=FACSBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACOHuUTEQHXdyUAR1wnjD7PI8gZaolM+7yuf5gp2WtNinqna5Xuz1GhAsEGA7gjl43MiiHbzsfBCQ/eFOsvZN4By/Qsu6j+8LmZuWk6Fs04fdCN/QES0rniPcZufor0GAd6hcBibpcFlt7nK9H/dCk2gBTSoYBqKEz4GWg+xEpHuQafEpOVANDuo4IwbpsvGm0LrLFaNpw9+mCRuGUKwuNcUEmczBMw3gZREGemuCVqG0Mkl9AvwiQ7s66rLmiFgCRVwnW6q7RgrGuxQBtoi/f0hNUuNW8mkba05dhFzWseqB6XGPg0O0TzkydMzhkEic1bVPgzdHdpdxD8dzbNDaEvO42RhOlsptiGvCD+shorMihl7NY6QrHKL+2OLwv/rqzp4jFtfS5m65RWrtR9QJBqrsxTHYDu2FuwQCiNjjaofzYLVHYV6q6AZgNon1EqJxp1avGWsafn1WT2IsuczwjDLGdW822KfBlM9WkM8PJKuMA7G6yCmtRn/Ei0b8ezmiI5g2DKZaQVnm/A+A64unSfyMPqBL1l2uBBHBDZ2u0oHnd3OJRW5axfQPLfNNMubNAUqhlFJvqD0Tc5bry4+X8MWUvaUbb7Lk8tNqwEpB3z+6DoD8sA2l6a1fZv3xeA0bAlifHOG8gbc/73HzZperUk6PhVw5obFyqONBQsOOPEYEJUIaJrmo4T3mpYZhI+YbQiAWWer5gGo0gKs50zbxiDqD2U52OOvbqwfpFOOzUsqcvhKMweCUPkILb2Qg3Mb9PCQW2w98jmgS54yokCUvIRtHlDQJwEicgKmYj10iVCFTgsW7GSNSCcjEtqqUHXZ3aJGHL1NgXPKb3c7BcqoNJqFSMX2rSlefSyeSO/C5u83RKW8uhTv0gfJtI0MI28kKuUahWKE769hO+3ESEBz1G6e/nj4GAaTRwZm6oNLJ7bXgqDd9bkAFd0yXrTdkxbRfHuD0DwJZ9gb4eG4ytu0tXRGBdPBsFhp6aHTaib3kfnqyZkfAhRmcTxbLZ9XRf3VxBC5Vn+32KzMaLoPo42975fi+YaZlmntrwrBuRAXvmu1OJb9YMA0AR7Y0k/pJAE1u/AnjQNfzd+eAWOWKDu9JrOdSOE36htIuf5I98xRzqO0g9ZORKkc6n6Q2RJOR86xYqVKPpRR/ph7nmkGe3sct1b7b37bvy5l5t2mqvSPGmgvYdz/ccYWlRcQtDjlaVfNrHGdcilLZmDowMIRJCpICAI3vrmIQ5SX5MyUr2/AJJS3Afn5h2NtfpjloHgsNj/HGjXg4BAPbpeFUZFTM8wAl4usQt+l+OsEZY7HTB32l7TqF8M+NGYqUiXu8wYRibwJtnIS4coZfuEKmgtw82Ki9ogAKsEfTooLMpH0Bk/yf7IdAylknLduoTIqzR+EW00d+WKuxXErm+Cn46oz7zXZ8DZH9UXm/jqBNijpDT/ZBcovEPaGFJWNbYIZLkUR2Wg4XfzC1d+TgjSE+YmEUAFuECUlnq1GT0XHa3pa1dJ3BU+1r; _U=1n7lWfrIrDd56ZONn3nyM-YTt39mEkiZ-a7Co4Hf9ag9pSBmSxV19RUvXogJyVvm56g3xKiV2cXcMXQwrSt49y5V1Uuo1FEZ_JTVplFq70sdrzIXAS-42dXR1wotXvELI_IdSk6DBUkF0MEFu4y-koP80LRN5N2xWIXxWoHOVCVsrXmWvfFLPbwJ8hTWLxf6q2IIy8hjvTAgs1JUicJv3bGwlISAD3V6SM0hfutr1IPU; WLS=C=911dcf52a24554b7&N=mogammee; WLID=B9B73jqg1BprPkMnjp+G5AtZJabQEGwLQDJ7p9jJ3gyxgcS72DXOeg51lPcarhErIcXPhX3TS/Hrp8x0mprj4nYNvvE6DAG5o11ca+xaGHM=; MMCASM=ID=298D8849CF2248839AFC913C43D58892; SRCHHPGUSR=SRCHLANG=en&DM=0&CW=1280&CH=2195&SCW=1280&SCH=2195&BRW=MW&BRH=MT&DPR=2.8&UTC=60&HV=1734174343&WTS=63869173514&PRVCW=1280&PRVCH=2195; _clck=1jqblld%7C2%7Cfrp%7C0%7C1802; _clsk=66sm10%7C1734174344543%7C1%7C0%7Ct.clarity.ms%2Fcollect; GI_FRE_COOKIE=gi_prompt=1", // Full cookie #2
  ];

  // Randomly select one of the two cookies
  const randomCookie = cookies[Math.floor(Math.random() * cookies.length)];

  await m.reply("المرجو الانتظار سنحاول رسم صورتك ...\n *Jeen-MD*");

  try {
    const res = new BingImageCreator({
      cookie: randomCookie,
    });

    const data = await res.createImage(text);
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        try {
          if (!data[i].endsWith(".svg")) {
            await conn.sendFile(m.chat, data[i], "", `😎 *(${i + 1}/${data.length})*\n\n*Prompt*: ${text}`, m, false, {
              mentions: [m.sender],
            });
          }
        } catch (error) {
          console.error(`Error sending file: ${error.message}`);
          await m.reply(`Failed to send image *(${i + 1}/${data.length})*`);
        }
      }
    } else {
      await m.reply("لم يتم العثور على أي صورة.");
    }
  } catch (error) {
    console.error(`Error in handler: ${error.message}`);
    await m.reply(`${error}\n\n${error.message}`);
  }
};

handler.help = ["bingimg"];
handler.tags = ["drawing"];
handler.command = ["bingimg"];
export default handler;
