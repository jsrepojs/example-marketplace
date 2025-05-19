# @example/marketplace

> Don't purchase this as it is just an example. Unless of course you want to support jsrepo.com ❤️

This is an example of how you might monetize a jsrepo registry on the [jsrepo.com](https://www.jsrepo.com) marketplace.

## Getting Started

1. Create an account on [jsrepo.com](https://www.jsrepo.com/login)

2. Link your account on Stripe Connect by navigating to your [account settings](https://www.jsrepo.com/account/settings) and clicking on `Connect Account`

3. Create an [access token](https://www.jsrepo.com/account/access-tokens) or authenticate to the CLI

```sh
jsrepo auth
```

4. Update your build config with the `access` key set to `marketplace`

```json
{
	"access": "marketplace"
}
```

5. Publish to jsrepo.com

```sh
jsrepo publish
```

5. Setup pricing for your registry under the `pricing` tab.

6. List your registry on the marketplace by switching `List on Marketplace` on in the settings for your registry.
