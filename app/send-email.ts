import { FormData } from "./contact/page";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
  console.log(data);
}
