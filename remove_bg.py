from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=50):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is white-ish
        if item[0] >= 255 - tolerance and item[1] >= 255 - tolerance and item[2] >= 255 - tolerance:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg("453065503_410573202014961_4397961225187884729_n.jpg", "logo_transparent.png", 30)
    print("Done")
