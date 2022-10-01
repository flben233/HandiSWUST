import { createApp } from 'vue'
import App from './App.vue'
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';
import { Loading } from 'vant';
import { Image as VanImage } from 'vant';
import router from './router.js'
import './assets/main.css'
import 'vant/lib/index.css';
import { Divider } from 'vant';
import { Col, Row } from 'vant';
import { NavBar } from 'vant';
import { Progress } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { Button } from 'vant';
import { Toast } from 'vant';
import axios from "axios";

axios.defaults.withCredentials = true;
const app = createApp(App);

app.use(Toast);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Icon);
app.use(Loading);
app.use(Grid);
app.use(GridItem);
app.use(router)
app.use(VanImage);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Progress);
app.use(Button);
app.mount('#app')
