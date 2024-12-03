def generate_svg_content(text, width=500, height=500):
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="black"/>
    <text
        x="50%"
        y="50%"
        font-family="Arial"
        font-size="40"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle">
        {text}
    </text>
</svg>'''

def generate_images():
    import os

    image_paths = {
        # SVG files
        ('logo-dark', 'svg'): '/assets/images/logos/logo-dark.svg',
        ('logo-light', 'svg'): '/assets/images/logos/logo-light.svg',
        ('favicon', 'svg'): '/assets/images/logos/favicon.svg',
        ('full-logo', 'svg'): '/assets/images/logos/full-logo.svg',
        ('icon-only', 'svg'): '/assets/images/logos/icon-only.svg',
        ('404', 'svg'): '/assets/images/illustrations/404.svg',
        ('empty', 'svg'): '/assets/images/illustrations/empty.svg',
        ('success', 'svg'): '/assets/images/illustrations/success.svg',

        # Raster image files
        ('avatar', 'png'): '/assets/images/placeholders/avatar.png',
        ('product', 'jpg'): '/assets/images/placeholders/product.jpg',
        ('banner', 'jpg'): '/assets/images/placeholders/banner.jpg',
        ('image-fallback', 'svg'): '/assets/images/placeholders/image-fallback.svg'
    }

    # Create directories
    for dir_path in ['logos', 'placeholders', 'illustrations']:
        os.makedirs(f'public/assets/images/{dir_path}', exist_ok=True)

    # Generate each file
    for (name, ext), path in image_paths.items():
        local_path = 'public' + path.replace('/', os.sep)
        os.makedirs(os.path.dirname(local_path), exist_ok=True)

        if ext in ['svg']:
            # Generate SVG
            with open(local_path, 'w', encoding='utf-8') as f:
                f.write(generate_svg_content(name))
            print(f'Generated SVG: {local_path}')
        else:
            # Generate raster image using PIL
            from PIL import Image, ImageDraw, ImageFont
            img = Image.new('RGB', (500, 500), color='black')
            draw = ImageDraw.Draw(img)

            try:
                font = ImageFont.truetype('arial.ttf', 40)
            except:
                font = ImageFont.load_default()

            # Calculate text position
            bbox = draw.textbbox((0, 0), name, font=font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            x = (500 - text_width) / 2
            y = (500 - text_height) / 2

            # Draw text
            draw.text((x, y), name, font=font, fill='white')
            img.save(local_path)
            print(f'Generated raster: {local_path}')

if __name__ == '__main__':
    generate_images()