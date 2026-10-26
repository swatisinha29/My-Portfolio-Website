# Setup: what to install to run this site

The site is built with [Jekyll](https://jekyllrb.com/), a static site generator written in Ruby. There is no Node.js, npm, Sass or database. You only need Ruby, Bundler and the two gems listed in the `Gemfile`.

## 1. Install Ruby (3.0 or newer)

The site was built and tested with Ruby 3.3.

**Windows**
1. Download **Ruby+Devkit** from https://rubyinstaller.org/downloads/ (pick a 3.x "WITH DEVKIT" build).
2. Run the installer. When it finishes, keep "Run `ridk install`" ticked and choose option **1 and 3** (MSYS2 base install and development toolchain).
3. Open a new terminal.

**macOS**
```bash
brew install ruby
```
Then add Homebrew's Ruby to your `PATH` as the install output tells you.

**Linux (Debian/Ubuntu)**
```bash
sudo apt install ruby-full build-essential zlib1g-dev
```

Check it worked:
```bash
ruby -v
```

## 2. Install Bundler

```bash
gem install bundler
```

## 3. Install the site's packages

From the project folder (the one containing `Gemfile`):

```bash
bundle install
```

This installs:

| Package | Why |
| --- | --- |
| `jekyll` (~> 4.3) | Builds the site |
| `webrick` (~> 1.8) | Local web server; Ruby 3+ no longer ships it, so `jekyll serve` needs it |

Jekyll's own dependencies (kramdown for Markdown, Liquid for templates, and so on) install automatically.

## 4. Run the site

```bash
bundle exec jekyll serve
```

Open http://localhost:4000. The page reloads its content when you re-run the command; add `--livereload` to refresh the browser automatically as you edit.

To only build the files, without a server:

```bash
bundle exec jekyll build
```

The finished site is written to the `_site/` folder. Upload that folder to any static host (GitHub Pages, Netlify, Cloudflare Pages and similar).

## Troubleshooting

- **`cannot load such file -- webrick`**: run `bundle install` and start the server with `bundle exec jekyll serve` (not plain `jekyll serve`).
- **`bundle: command not found`**: run `gem install bundler`, then open a new terminal.
- **Windows build errors while installing gems**: re-run `ridk install` and choose option 3 so the compiler toolchain is present.
- **Port already in use**: use another port, for example `bundle exec jekyll serve --port 4001`.

## Fonts

The site loads *Newsreader* and *IBM Plex Mono* from Google Fonts, so the first view needs an internet connection. Offline, it falls back to Georgia and the system monospace font.
