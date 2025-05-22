# 📁 File Upload Guide
## ✅ Steps (General Overview)
- Create a file input element.

- Use a change event listener on the input to detect when a file is selected.

- In the event handler function:

- Retrieve the selected file.

- Create a FormData object.

- Append the file to FormData.

- Call an API that handles the file upload using HTTP POST.