import React from "react"
import PageNotFound from "./index"
import './style.sass';
export default {
    title: "PageNotFound",
    component: PageNotFound,
    argTypes: {
        image: { control: 'text' },
        mainText: { control: 'text' },
        subText: { control: 'text' },
    }
}
export const pagenotfound = (args) => <PageNotFound {...args} />;
pagenotfound.args = {
  image:"https://scorelab.org/images/404.png",
  mainText:"PAGE NOT FOUND",
  subText:"The requested page does not exist "
}