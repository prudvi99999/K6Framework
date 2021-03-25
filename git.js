// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group(
    "page_1 - https://github.com/loadimpact/har-to-k6/blob/master/",
    function () {
      response = http.get(
        "https://github.com/loadimpact/har-to-k6/blob/master/",
        {
          headers: {
            "upgrade-insecure-requests": "1",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "navigate",
            "sec-fetch-user": "?1",
            "sec-fetch-dest": "document",
            referer: "https://npm.io/",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            cookie:
              "_octo=GH1.1.676947466.1614682066; tz=Asia%2FCalcutta; _device_id=2df663f14fe9cb12152eb3e2553c8c9a; tz=Asia%2FCalcutta; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; user_session=3QiwOavIaquEUjRmfKNjhUw5A6tPluzqhWXxL_BP9w9rxYUx; logged_in=yes; dotcom_user=prudvi99999; has_recent_activity=1; _gh_sess=jdBUKA3kvQfbVZFk4X%2F7nzZnVGqotpN9ZmOg3UTJ67AO6a%2Bsz7HdkJZGQ5ky756spzO8GlglCXTpoe6l1sQZfs94hWe8I4JVgoUiqwnCUk49BjKKqVDv0g9YJr99BWx9KIkBMwxEsuuHyke2v%2FH8w9BU%2BjCemlDdWFyHW18bAjvB5Eemu2l7uKOE2GYQzb7KraEww3c1zrcnpmWYwh2hMwkLp82ZwMnHDuzxGUd6OADUMkYQP2tKvXAA%2Fc3QYc1YSYmO%2B4A%2BuybEywNRy0Xnnv9ENgEQEZOBFkbRH%2BAFp%2BhTR6%2BhFuOt3CkPrbvYa30QRb9YDhPGTIc6ua0fWpEqE6zwhSbXmK0bwhEeW7LperidMCBhDWVtLBKtjk8sIu%2F6KbaGap44%2B2DkQpNwIzbjjUCrNBQO7gh5Te%2FRDFGQaIo3E5yyOE9fmXesEd6dpgXHa%2Bi4QdiS2%2BCR9rFMFmWGr5vaVuXm1ArU%2B8orPqHaQJwDs2Gck5UIvbm06W2yY0oe1I%2Bk7xqMrYjESFtLnwuHiBmMVv4XhKC3ZU6lfr3MgcJ3sRc7feFvpmlyhPVR1czqy6fMGNf8uiEnLSyNr8hUze7T%2Be7RoC%2F5qDMhqaspI1ra%2FVaEnRi4nygfUyu5ypso6z%2FYNps256CbS5xj2wbG3tuo%2BLD14uUPO5VYOEFw2yRShGXz3ri5JuwLJR%2BemVFBJakjF9vy6y4jqr9nobmh26l4%2FFt%2F69S%2FWz0BRD5gwWQRn8UHVdvsd6LsMIZlkw6hBLLRm1zfhQn3Axi0t9zKl7My8x6zrRVsknVSRBdQj2OP97FY9A8%2BK158MBV0pPZh4Mk69PG8UUtEQ0%2F5wzodZFjyesnhKSPTSQdUA7s2K3yYrbmwJU7hBYHBJ7lIMBKRHfvgG025bsL8IRKrNHqKUsyrDH%2B%2BZ7Y7o5JpnkLFYGeI6uO%2B7geNcZPfjv8BPP7BLYm6WTvZN%2FlIm8YMZALMek03r18QYZLdoGbZK%2F97u%2BqsdXcKjSb2ghKKYb2HYsh1STozFXtm6Nrae2tfinjaqT5fiTTUXyaGuUPjeRZsMMFvVc7BuMQStKpZJraIopcT%2FYRGVRCfRQCrgl6psKw9lsrk5i8xZIcCupBrqDHed15fjWOHM9bcNLlZgSen5KkMe0iPRG0JS7pLBk%2BtakA63iNhjbo6dIrnQsX0PFlYWjV5jgxlCCphf2ggCZWcPw4vo%2BOS6DlI9Mi70BcaifsVdx%2BgR%2BaVSR0h%2F8fqqc0YWhD0fCriYuL0bqQ%2BFjlCdKsd1TDoquX3pkA3V%2FpFUhv6QWoXYU%2F32q97x0fTC6dr9fscivpRpkrH%2BkCGDrQ8qwho1IYRmM9z4UzX5Cw7JKEw%2Fjcg5WuAQbg4dwMpvqSMgsnJMMZoA6tOQVCVfY6xcvr5UVXj9ZuciPIhteDxuI1wMlonl%2FDX23Xr8XMqINB3oaQLLmflq8wq32QLeU1uNOLh%2F7aTtkWtbHN2SaEQ%2BOIBcGSTXdtaJ1KhlEVnbbgWTo5vZ0SXK3LCT3rFe88Ch2IsSrAZPSP9YQjfi2p9B3aV9S%2BvZvzmvH1u5c89LlrEMGNvThSHnCkcJhgRUOy96MtjLQoDLRSPa07GmtjpayyqxHO2h2VnWXq4AV9OZ4Ymii1gwyhx8YjGO7rKxOy69QCPeKPKPO9xd88LFcfMEs1sHEea%2BkdZCgxN%2FoXMlmHo428h0SArPO%2BZmIYMtYrp9owkVXFE1fyngFc%3D--dGFfvNoeqYPZ5u0q--Yn3CDRqywMOTBJgtA6GGsA%3D%3D",
          },
        }
      );

      response = http.get("https://github.com/k6io/har-to-k6/blob/master", {
        headers: {
          "upgrade-insecure-requests": "1",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "navigate",
          "sec-fetch-user": "?1",
          "sec-fetch-dest": "document",
          referer: "https://npm.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          cookie:
            "_octo=GH1.1.676947466.1614682066; tz=Asia%2FCalcutta; _device_id=2df663f14fe9cb12152eb3e2553c8c9a; tz=Asia%2FCalcutta; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; user_session=3QiwOavIaquEUjRmfKNjhUw5A6tPluzqhWXxL_BP9w9rxYUx; logged_in=yes; dotcom_user=prudvi99999; has_recent_activity=1; _gh_sess=B2Fn%2BszAnKZyn%2BTzV7v90TbbMf1OYUwCNlrDelsJ8nBTnbbNEdwnYvIJ1v1z1ze0ARGP%2F2fuLmY6zpfi2oXXOovGeQSybGhtwc%2FxCiq7vJl6ijI1lyO595eJkG7WoMDIoXY0a9om9A8aaN3gW41PdN36rpDjzpS0KGh%2FuWvOPjV7slqN%2BiGWGYdSykkLX%2Bc%2ByA4fyPvLQ52IWonD16qmaKvS5LN8fozh0OafvdTWo9TQVXuykCxRZqV0no93vlvCMcVh3Utzgzh1qRI66l8H%2FuTObXokspMhp85vtktPa%2BaaihZswez8pfMH03ry3MgKok7bU94c94L%2FPwSLmDDLNWymBIW4OH2DFz6SlI2lGSnY37QmHqoG44Ee5g4O%2Buqbq6X5q7US14BeqLSIjql0tSIqV5f%2BjVupMLpBwzsPCHIp1tC%2F0BExtFi2YvAItkYf880zR4KGt71kBzD5zmBLhiRdgPE9FduTGaQM8Xie7wheNwhoRzTOqjJdCN7QSZ4JH8KyFvwSaYnINJVwOOTtGaRH0Q90Ht4WYM4AZt4MbTT8IC3oaEoXMFQOoiq4hoaU8NblW%2BLrqefH%2BuEj1HlcyRuNoPL3fNBJQvlDOIrrfYczHP022sIzYIupRG5W3njy%2FKY8w2Dm0JhBg3PPF70VxpT5UbCihArRPOVVitrOhARXxuKI3qMyArJ9B1arVdZBRjLuxgn%2BOoUK85mWC%2BbrUxMJ04xVvflD5lbwkEA8Cx0ZWJOt7cRJNd3zIgFc8p8iBGAG78uRA%2BAEKpLBBtqCUKlOdNBCoyFMdAkpkzKeAvxQ1dJCn0FkU5ujJW6q9%2BNyvQp6vnwxCtl5%2F65F7oVGSPx6jTpwpQduCKRpyHRc%2FUlK1QNjvgKcQTWZ4vVGIIE2LbpHRpguqmgZ9J8VE44pL4FNn5i%2BYI7RFZlXiKB%2BtwpCTmupDKqlNWN%2FcB5S8IOAHhbTKJ1o%2FsFt3%2FCvoQF01kNoVMlVhbUjz4QGExnClLCiUv5u5Ej7J3nvtZWriYwgorYzyO1EPbZBnBKUJ0tF3N%2BsCxxtGft%2FYZi56Cnw4y5NTojbiMmx4OYBp%2F7OrjzpV%2FTilNIvIZ2UCkp5PAeO1YggAsyn1zhRzF16b8JTp7eZwyyxDFSZLi40hAoke%2BPbO%2BQ5pSrD9Lglwty%2BY4TbPz3jt%2BtKCRqGOywH15pdqE%2BZvrvzdCl5%2Bt%2F0JaFI%2FThzYkYrjbggDXd%2BqyqZRZtFOXJ64Ig6a9RV8Uwn5OHKzGtLDiihKYiNM%2Fae4lnKT88xpRa80GQ12N1kEN%2BLeoPsmAFEgguaFCR3QoCR%2FHk3WI%2FyuNMUgjS10I5Y5h5F2l9U1CT4uaT6DZ%2BPmG78PHgjSNFkms%2BrX01hXZ3HRKWvfJuR2R%2BM5BZ0V6Jl3cWdYNEACV3uL3D%2BeqQZh%2B1U1mrLttVrDmVcnrn%2FrOKN1fi9FgUbbriuG5s%2FUCIf%2FxikqyDfrDmlaIHhhYr%2FteuGVrZqozl9KkDlbhoKCtOuj1e1LTDva1is%2Fo8AnNQ9dDo%2B%2F8lT%2BqBYWSch5SMkdgZT4Ux1iWwgxIFB%2BcQA0AMMopGMuCuswqIvne1CqNw5VlIsDloGjn6%2FYgANAVoWeYHjsPd5zBtHeczd%2FF0t0T%2FfNQvdIhRzIrHU6FvH2cnvrUImfq250VXY79kGV4TnfXeADcpBzTlysWjTuWFCNkWjR0IQSmMGPvfCIUDXuLg%2Fiq9vsw4VIDNoXx8J8W0%3D--jyKQ5NgX9Aao2NTE--MU1maoU62euX1HapFRBdDw%3D%3D",
        },
      });

      response = http.get(
        "https://github.githubassets.com/assets/frameworks-5e6ef1d5431cb0892769b9fb60bafd6c.css",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/behaviors-56a820267b4ba8b15f3e529cc2aed6b2.css",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/github-c886641181b4016c893f3a89e3ba02b2.css",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/environment-f0adafbf.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/chunk-frameworks-df28b1be.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/chunk-vendor-fa4f0de0.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/behaviors-4ce5aae0.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/primer-030c498c.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/repositories-6d582bda.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/diffs-9e0fab2f.js",
        {
          headers: {
            origin: "https://github.com",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "script",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/site-aeca312530e9cfd6e4f215ef6331ec4b.css",
        {
          headers: {
            origin: "https://github.com",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "style",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/search-key-slash.svg",
        {
          headers: {
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://avatars.githubusercontent.com/u/20433777?s=40&v=4",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "if-none-match":
              '"c92be38cc5c948ebca9be5615080517f37f59a3dd8d7848cd69f0d4a505653b3"',
            "if-modified-since": "Mon, 07 Mar 2011 00:44:54 GMT",
          },
        }
      );

      response = http.get(
        "https://avatars.githubusercontent.com/u/20433777?s=60&v=4",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "if-none-match":
              '"c92be38cc5c948ebca9be5615080517f37f59a3dd8d7848cd69f0d4a505653b3"',
            "if-modified-since": "Mon, 07 Mar 2011 01:33:58 GMT",
          },
        }
      );

      response = http.get("https://github.githubassets.com/_error.js", {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          accept: "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          referer: "https://github.com/k6io/har-to-k6/blob/master",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        },
      });

      response = http.get(
        "https://github.githubassets.com/assets/chunk-edit-7159c8a1.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/assets/chunk-color-modes-322b85a1.js",
        {
          headers: {
            Origin: "https://github.com",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/static/fonts/inter/Inter-Medium.woff",
        {
          headers: {
            origin: "https://github.com",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "font",
            referer:
              "https://github.githubassets.com/assets/site-aeca312530e9cfd6e4f215ef6331ec4b.css",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg",
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get(
        "https://github.com/users/prudvi99999/feature_preview/indicator_check",
        {
          headers: {
            accept: "application/json",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            cookie:
              "_octo=GH1.1.676947466.1614682066; tz=Asia%2FCalcutta; _device_id=2df663f14fe9cb12152eb3e2553c8c9a; tz=Asia%2FCalcutta; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; user_session=3QiwOavIaquEUjRmfKNjhUw5A6tPluzqhWXxL_BP9w9rxYUx; __Host-user_session_same_site=3QiwOavIaquEUjRmfKNjhUw5A6tPluzqhWXxL_BP9w9rxYUx; logged_in=yes; dotcom_user=prudvi99999; has_recent_activity=1; _gh_sess=OMW44b%2Fz1e1aimIMIzUdgY%2FPPZP16adKhaJNEXMXSXN%2FErb2eMgT1nA1%2F1zBBzBqyQ4HstVTP2rvNiZPQaGSDl2YgFYceRbAnH0ozhAWDzdcpjknkViOYRTUESRB9uQvNzGwg9SObzErBjpgy5QfMHdzyUAAno0l0DK828jvI9%2FolTnyEaivp2iGldpv%2BCZi9adzqqB7u9EiR%2BlCLBfzrPSGrlU%2FrFzZtX%2Fg4wMSWSGRRJJpv%2FcmwEyUgFkGof1aog8DvqSoACRauM%2FP7fpZ57A%2F6Fi6Mmu28jpRZ%2BhVg2bcl5dGJjNp41R6o%2FPv5zLN2C5VX%2BQTSGd7qVf%2BnzmP3z%2BEEzbMWkqp7zf%2BbtGL0A35raz2HOLaC3BTi1Bh4Tzh%2Bs0gpub5IeYhvhlGO1wZRdA%2FnSoAGekxKg2Tx5gZ%2FPgHl%2BJNFxNImdixjy4ZW8Qfx0uf6gtvl32G%2FPR%2F1xWkwrcaksZ%2BYThvvBE7VO5LanDwZZc5oZ73HImCR48KuxGMyOOrC2PnashS1vt8LAajW62L3axMLFGuDJGTc1%2BkCEguJ7XEYPSMOOQTNzOv6xR4J1RIoPF4iCaxsm22hrdbYB%2B8SGzBImYfRFba5RNvixOM5zqV%2F1PmDroDTVJU3%2FdkbuB66givQSlq35%2FJ9qzNpdKM7QwVdeI3sn%2B4L0f4U1pepG0PPIrofRqsRxSrkGtL%2BWkJuGU2JypBEv1PEqo2SicNUM0GbKxT7gO2uXoOfb%2F3xCQSkh814q%2BY5uqgXrPoiSQ%2BNEOPXqvNwtxhhpyVXqwp8N6qo%2B1FWLtN0hHTvz32%2FmJkK51a3mh0Jvr6oe3oaNkD%2FieIDTMxXwX%2FO%2Be9raEA571%2BbKZ3dAJlRSBER1uAXpRibrH2%2F1lFokUiRF7DglEtvQtpM40X7e0cZ%2B0mhecLyOrcqBbn23%2F5GWxipz5hNxukiXI1ea7M%2FYZNLoCO9ggLi%2BFAchlw0x1qcpMCsXAV69NmsUBoANl9xfrebC4F4CTiYgyfYn38mMkg7whbjqhQnEj86ukrs69FFVJi83JVgdcFabOKr1b1SzhReWmHqWfpi1PW393mZ8e%2Bs69%2FxF4jA7i9lvyBoO1bQSWGPFwhamraMMcFBJr0Y3rzYQ5PGpEX%2FhoO9ArmnRXESJYMzedQHS9T9W6HLTtv3acPVSjlpoMs%2FpdO3VRLyYDtcVCxdw7a4%2B7gcOVgEnA%2ByHZnSW8MnBHYbZBB8r5rP4ln%2FX7KvF3aO4uW4yY0uGYBV4xSv81N3vkGFiP96nedNHxMwfcB0mSZc%2Fbql5MXoBQ9eeqRbKfwx8wF31fgisrGytZWjlxPV75UBoCr8h%2B%2FS0gFd2MNJ1NPtTVk8Z5Wrm9bo7NluR2W59ZazOWN7Ca%2FgJxxaDtgqPWnOEP3haiwQbtDI3AChyLMVejbLQrqc0Xf%2FgvO6Hgzi9yL9wZUFjWNVqkXhUbek5Mh8cHP5PUexbuitsEviGLkpD%2BSKZmAI3sN%2BORsD%2FYD0MFfY%2FQ44CGj2nRXRNApu9ibI%2FxkgVKv2N7usE4PGX97BcGOap%2FrOb2O%2BHSK6IUjOJBxNeM%2BjcRJ%2FTvKYtRkpmVAzHRBJDGmd3nKHMOC3xB0M7iv4b4xckHlG4cxG67IWrnfF0Wvold0feTwwWbaSXjxNaXD0AU9vvOSLwg9Xqqz1NMwRZk6N1UIcwGYOaepQGf%2B%2BOT5sjPxTjAswusJoRddez9jUhChdVtNOVCV19RV7yM%3D--kxkBxyjiCgtYspNB--bSwAX1vOiCRgRqF6RYzIcg%3D%3D",
            "if-none-match": 'W/"b086cd16a5d1e1190981cda623503729"',
          },
        }
      );

      response = http.get(
        "https://collector.githubapp.com/github/page_view?dimensions[page]=https%3A%2F%2Fgithub.com%2Fk6io%2Fhar-to-k6%2Fblob%2Fmaster%23browser-usage&dimensions[title]=Page%20not%20found%20%C2%B7%20GitHub&dimensions[referrer]=https%3A%2F%2Fnpm.io%2F&dimensions[user_agent]=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F88.0.4324.190%20Safari%2F537.36&dimensions[screen_resolution]=1366x768&dimensions[pixel_ratio]=1&dimensions[browser_resolution]=1366x162&dimensions[tz_seconds]=19800&dimensions[timestamp]=1615204318646&dimensions[referrer]=https%3A%2F%2Fnpm.io%2F&dimensions[request_id]=C3AD%3A7C06%3A876C9C%3A98630C%3A60460FE3&dimensions[visitor_id]=2907467229194754002&dimensions[region_edge]=ap-south-1&dimensions[region_render]=iad&&measures[performance_timing]=1-433-433-3999-2912-2912-2874-981-433-433-433--3999-0-433-22-503-1418-952---&&dimensions[actor_id]=20433777&dimensions[actor_login]=prudvi99999&dimensions[actor_hash]=1b2c9f577f41444dfad8dc4f3861bbe3fdb48994066d933b5a66ae36de14b877&dimensions[cid]=676947466.1614682066",
        {
          headers: {
            Host: "collector.githubapp.com",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://github.com/k6io/har-to-k6/blob/master",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
          },
        }
      );

      response = http.get("https://github.com/manifest.json", {
        headers: {
          Referer: "https://github.com/k6io/har-to-k6/blob/master",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
        },
      });

      response = http.post(
        "https://api.github.com/_private/browser/stats",
        '{"stats":[{"webVitalTimings":[{"name":"https://github.com/k6io/har-to-k6/blob/master#browser-usage","fcp":2567.6600000588223}],"timestamp":1615204317699,"loggedIn":true},{"webVitalTimings":[{"name":"https://github.com/k6io/har-to-k6/blob/master#browser-usage","ttfb":951.6699999803677}],"timestamp":1615204318650,"loggedIn":true},{"resourceTimings":[{"name":"https://github.githubassets.com/assets/frameworks-5e6ef1d5431cb0892769b9fb60bafd6c.css","entryType":"resource","startTime":1007.1300000417978,"duration":34.07499997410923,"initiatorType":"link","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1007.1300000417978,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1041.205000015907,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/behaviors-56a820267b4ba8b15f3e529cc2aed6b2.css","entryType":"resource","startTime":1007.465000031516,"duration":30.224999994970858,"initiatorType":"link","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1007.465000031516,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1037.6900000264868,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/github-c886641181b4016c893f3a89e3ba02b2.css","entryType":"resource","startTime":1007.7299999538809,"duration":31.58500010613352,"initiatorType":"link","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1007.7299999538809,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1039.3150000600144,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/environment-f0adafbf.js","entryType":"resource","startTime":1007.9400000395253,"duration":28.064999962225556,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1007.9400000395253,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1036.005000001751,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-frameworks-df28b1be.js","entryType":"resource","startTime":1008.0249999882653,"duration":30.440000002272427,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.0249999882653,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1038.4649999905378,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-vendor-fa4f0de0.js","entryType":"resource","startTime":1008.1400000490248,"duration":35.514999995939434,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.1400000490248,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1043.6550000449643,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/behaviors-4ce5aae0.js","entryType":"resource","startTime":1008.2000000402331,"duration":36.619999911636114,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.2000000402331,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1044.8199999518692,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/primer-030c498c.js","entryType":"resource","startTime":1008.2649999530986,"duration":33.96000002976507,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.2649999530986,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1042.2249999828637,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/repositories-6d582bda.js","entryType":"resource","startTime":1008.3299999823794,"duration":34.24000006634742,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.3299999823794,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1042.5700000487268,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/diffs-9e0fab2f.js","entryType":"resource","startTime":1008.3850000519305,"duration":310.1299999980256,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.3850000519305,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1318.5150000499561,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/site-aeca312530e9cfd6e4f215ef6331ec4b.css","entryType":"resource","startTime":1008.4649999625981,"duration":271.89000009093434,"initiatorType":"link","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.4649999625981,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1280.3550000535324,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/search-key-slash.svg","entryType":"resource","startTime":1008.6450000526384,"duration":34.51999998651445,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1008.6450000526384,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":1043.1650000391528,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/20433777?s=40&v=4","entryType":"resource","startTime":1017.2899999888614,"duration":148.7549999728799,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1017.2899999888614,"domainLookupStart":1017.2899999888614,"domainLookupEnd":1017.2899999888614,"connectStart":1017.2899999888614,"connectEnd":1017.2899999888614,"secureConnectionStart":1017.2899999888614,"requestStart":1073.2200000202283,"responseStart":1158.5500000510365,"responseEnd":1166.0449999617413,"transferSize":193,"encodedBodySize":1585,"decodedBodySize":1585,"serverTiming":[],"workerTiming":[]},{"name":"https://avatars.githubusercontent.com/u/20433777?s=60&v=4","entryType":"resource","startTime":1018.4250000165775,"duration":148.90499995090067,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1018.4250000165775,"domainLookupStart":1018.4250000165775,"domainLookupEnd":1018.4250000165775,"connectStart":1018.4250000165775,"connectEnd":1018.4250000165775,"secureConnectionStart":1018.4250000165775,"requestStart":1073.3250000048429,"responseStart":1159.1949999565259,"responseEnd":1167.3299999674782,"transferSize":92,"encodedBodySize":1585,"decodedBodySize":1585,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/_error.js","entryType":"resource","startTime":2613.935000030324,"duration":254.6050000237301,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":2613.935000030324,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":2868.540000054054,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-edit-7159c8a1.js","entryType":"resource","startTime":2898.494999972172,"duration":4.8050000332295895,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":2898.494999972172,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":2903.3000000054017,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/assets/chunk-color-modes-322b85a1.js","entryType":"resource","startTime":2898.9549999823794,"duration":4.895000020042062,"initiatorType":"script","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":2898.9549999823794,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":2903.8500000024214,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/static/fonts/inter/Inter-Medium.woff","entryType":"resource","startTime":2917.3700000392273,"duration":1065.169999958016,"initiatorType":"css","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":2917.3700000392273,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3982.5399999972433,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg","entryType":"resource","startTime":3010.9599999850616,"duration":813.4250000584871,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3010.9599999850616,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3824.3850000435486,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg","entryType":"resource","startTime":3011.4949999842793,"duration":813.8500000350177,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3011.4949999842793,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3825.345000019297,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg","entryType":"resource","startTime":3011.674999957904,"duration":916.920000105165,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3011.674999957904,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3928.595000063069,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg","entryType":"resource","startTime":3011.83500001207,"duration":917.0000000158325,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3011.83500001207,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3928.8350000279024,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg","entryType":"resource","startTime":3011.9950000662357,"duration":970.1449999120086,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3011.9950000662357,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3982.1399999782443,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg","entryType":"resource","startTime":3012.170000001788,"duration":970.2100000577047,"initiatorType":"img","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3012.170000001788,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"connectEnd":0,"secureConnectionStart":0,"requestStart":0,"responseStart":0,"responseEnd":3982.380000059493,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"serverTiming":[],"workerTiming":[]},{"name":"https://github.com/users/prudvi99999/feature_preview/indicator_check","entryType":"resource","startTime":3042.6900000311434,"duration":623.5800000140443,"initiatorType":"fetch","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":3042.6900000311434,"domainLookupStart":3042.6900000311434,"domainLookupEnd":3042.6900000311434,"connectStart":3042.6900000311434,"connectEnd":3042.6900000311434,"secureConnectionStart":3042.6900000311434,"requestStart":3044.6150000207126,"responseStart":3663.0199999781325,"responseEnd":3666.2700000451878,"transferSize":3884,"encodedBodySize":44,"decodedBodySize":24,"serverTiming":[],"workerTiming":[]}],"timestamp":1615204318652,"loggedIn":true},{"navigationTimings":[{"name":"https://github.com/k6io/har-to-k6/blob/master#browser-usage","entryType":"navigation","startTime":0,"duration":4004.425000050105,"initiatorType":"navigation","nextHopProtocol":"h2","workerStart":0,"redirectStart":21.55000006314367,"redirectEnd":433.04999999236315,"fetchStart":433.04999999236315,"domainLookupStart":433.04999999236315,"domainLookupEnd":433.04999999236315,"connectStart":433.04999999236315,"connectEnd":433.04999999236315,"secureConnectionStart":433.04999999236315,"requestStart":503.2349999528378,"responseStart":951.6699999803677,"responseEnd":1417.710000067018,"transferSize":110791,"encodedBodySize":102624,"decodedBodySize":172361,"serverTiming":[],"workerTiming":[],"unloadEventStart":0,"unloadEventEnd":0,"domInteractive":2873.5800000140443,"domContentLoadedEventStart":2911.6200000280514,"domContentLoadedEventEnd":2911.625000066124,"domComplete":3998.9650000352412,"loadEventStart":3999.004999990575,"loadEventEnd":4004.425000050105,"type":"navigate","redirectCount":1}],"timestamp":1615204318652,"loggedIn":true},{"downloadedBundles":["diffs.js","site.css"],"timestamp":1615204318655,"loggedIn":true}]}',
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            "content-type": "text/plain;charset=UTF-8",
            accept: "*/*",
            origin: "https://github.com",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "empty",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            cookie:
              "_octo=GH1.1.676947466.1614682066; tz=Asia%2FCalcutta; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; logged_in=yes; dotcom_user=prudvi99999",
          },
        }
      );

      response = http.post(
        "https://api.github.com/_private/browser/stats",
        '{"stats":[{"webVitalTimings":[{"name":"https://github.com/k6io/har-to-k6/blob/master#browser-usage","cls":0}],"timestamp":1615204338338,"loggedIn":true},{"webVitalTimings":[{"name":"https://github.com/k6io/har-to-k6/blob/master#browser-usage","lcp":2734.27}],"timestamp":1615204338338,"loggedIn":true}]}',
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            "content-type": "text/plain;charset=UTF-8",
            accept: "*/*",
            origin: "https://github.com",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "empty",
            referer: "https://github.com/k6io/har-to-k6/blob/master",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            cookie:
              "_octo=GH1.1.676947466.1614682066; tz=Asia%2FCalcutta; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; logged_in=yes; dotcom_user=prudvi99999",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}
