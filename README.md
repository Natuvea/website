# Natuvea

Source for [natuvea.com](https://natuvea.com/), the website for Natuvea Ltd, a design and development studio working across physical and digital products.

## Structure

| Path | Description |
| --- | --- |
| [`web/`](web/) | The static website: the landing page, product, studio, privacy, and contact pages, and the journal, with shared `styles.css`, logos, icons, `robots.txt`, and `sitemap.xml`. |
| [`infr/`](infr/) | AWS CDK infrastructure (TypeScript) that hosts the site on S3 + CloudFront with a Route 53 domain and ACM certificate. |

## Website

The site is static HTML with no build step. Open `web/index.html` directly in a browser to preview.

## Infrastructure

The `infr/` package provisions hosting for `natuvea.com` (and `www.natuvea.com`):

```bash
cd infr
npm install
npm run build      # compile TypeScript
npm test           # run CDK assertion tests
npx cdk synth      # synthesize the CloudFormation template
npx cdk deploy     # deploy (requires AWS credentials and a Route 53 hosted zone)
```

Pushes to `main` deploy automatically through the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

© Natuvea Ltd. All rights reserved.
