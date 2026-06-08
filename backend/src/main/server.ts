import app from "./config/app";
import router from "./config/routes";

app.use(router);

const PORT = app.get("port");

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
