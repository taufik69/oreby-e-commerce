import React from "react";
import Container from "./Container";
import FooterListItem from "./FooterListItem";
import List from "./List";
import ListItem from "./ListItem";
import FooterListHead from "./FooterListHead";
import Images from "./Images";
import Footerbottom from "./Footerbottom";
const FooterTop = () => {
  return (
    <div className=" bg-[#979797cc] ">
      <Container className="mx-auto  max-w-container p-5">
        <div className="pt-5 sm:flex sm:justify-between sm:pt-16">
          <FooterListItem>
            <FooterListHead
              className="font-dmsans text-lg font-bold text-primary "
              title="Menu"
            />
            <List>
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D] "
                itemname="Shop "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="About "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="contact "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="Jourmal"
                href="#"
              />
            </List>
          </FooterListItem>
          <FooterListItem className="">
            <FooterListHead
              className="font-dmsans text-lg font-bold text-primary"
              title="Shop"
            />
            <List>
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="catagories 1 "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="catagories 2 "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="catagories 3 "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="catagories 4 "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="catagories 5 "
                href="#"
              />
            </List>
          </FooterListItem>
          <FooterListItem>
            <FooterListHead
              className="font-dmsans text-lg font-bold text-primary"
              title="HELP"
            />
            <List>
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="Privacy Policy "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="Terms & Conditions "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="Special E-shop "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="Shipping "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="Secure Payments "
                href="#"
              />
            </List>
          </FooterListItem>
          <FooterListItem>
            <FooterListHead
              className="font-dmsans text-lg font-bold text-primary"
              title="(052) 611-5711"
            />
            <List>
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="company@domain.com "
                href="#"
              />
              <ListItem
                className="py-2 text-sm font-normal text-[#6D6D6D]"
                itemname="575 Crescent Ave. Quakertown, PA 18951 "
                href="#"
              />
            </List>
          </FooterListItem>

          <FooterListItem>
            <Images imgsrc="../images/Logo.png" />
          </FooterListItem>
        </div>
        <Footerbottom />
      </Container>
    </div>
  );
};

export default FooterTop;
