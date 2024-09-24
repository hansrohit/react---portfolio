function formDatas(props) {
  const data = `Name: ${props.name}\ne-mail: ${props.email}\n subject: ${props.subject}\nmessege: ${props.messege}\n\n`;
  const fs = require("fs");
  fs.appendFile("form.txt", data, (err) => {
    if (err) {
      console.err;
      return;
    }
  });
}
export default formDatas;
