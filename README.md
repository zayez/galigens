# Galigens - Mars surface explorer

A webapp to explore the Martian surface using real-life photos from Mars captured by NASA's rovers operating on the red planet.

Available rovers:

- Spirit
- Oportunity
- Curiosity (active)
- Perseverence (active)

## Features

- Display a list of available rovers with their mission details.
- Display a gallery of photos by selected rover.
- Allow to filter the photo gallery by date (or sol) and camera.
- Allow to zoom photos in the rover's photo gallery.

## Development

Run with nix-shell:

```bash
nix-shell
```

Create a `credentials.json` from the available template (`credentials-template.json`), then insert your _API key_ from the [NASA Open APIs](https://api.nasa.gov/) to it.

After this you're set and can start developing:

```bash
npm start
```

## Scope

- Minimalistic.
- Web only.
- No back. Only persist data in the browser.
- No CSS Framework.

## References

- [Mars Curiosity Rover mission](https://mars.nasa.gov/msl/home/)
- [Opportunity Rover mission](https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer)
- [Spirit Rover mission](https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit)
- [Perseverance Rover mission](https://www.jpl.nasa.gov/missions/mars-2020-perseverance-rover)

## Third-party resources

- [NASA Open APIs](https://api.nasa.gov/)
- [cssloaders (MIT)](https://github.com/vineethtrv/css-loader)
