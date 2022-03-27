# Galigens

This project aims to use the NASA's API to display pictures of Mars that were taken from the rovers on the red planet.

## Development

Run with nix-shell:

```bash
nix-shell
```

Create a `credentials.json` from the available template (`credentials-template.json`), then insert your _API key_ from the [NASA Open APIs](https://api.nasa.gov/) to it.

You're set and can start developing:

```bash
npm start
```

## Requirements

- Display a list of the rovers available.
- Allow the selection of a rover.
- Display a list pictures taken from a selected rover.
- Possibility of date choices.

## Scope

- Mobile / Web only.
- No back-end; should only persist data in the browser.
- No CSS Framework.

## References

- [Mars Curiosity Rover mission](https://mars.nasa.gov/msl/home/)
- [Opportunity Rover mission](https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer)
- [Spirit Rover mission](https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit)
- [Perseverance Rover mission](https://www.jpl.nasa.gov/missions/mars-2020-perseverance-rover)

## Third-party resources

- [NASA Open APIs](https://api.nasa.gov/)
- [cssloaders (MIT)](https://github.com/vineethtrv/css-loader)
