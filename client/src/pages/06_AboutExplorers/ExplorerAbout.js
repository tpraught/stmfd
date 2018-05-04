import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


class ExplorerAbout extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[6].id}
      src  = {heroImages[6].image}
      alt = {heroImages[6].name}
      />
      <Wrapper>
        <div className="pageTitle">
          <h1>ST. MICHAEL FIRE EXPLORERS - POST 3172</h1>  
        </div>
        <div className="pageContent">
          <span className="float-right pl-5">
              <img src="../../../assets/images/06_ExplorerAbout.jpg" alt="Explorer About" width="344" />
          </span>
					<p>The Explorer Post 3172, organzied in 2002, is overseen and operated by the St. Michael Fire Department. The Explorer program is a job-shadowing program through the Boy Scouts of America and Learning for Life for youth ages 14 to 21 who wish to learn more about fire and medical services.</p>
          <p>The purpose of Fire Exploring is to provide experiences that help young people mature, and prepare them to become responsible and caring adults. The program helps develop, train, and prepare interested youths for a career in full-time, volunteer, or paid-on-call fire fighting and emergency medical services.</p>
          <p>The program is based on five key areas:</p>
          <ul>
            <li>Career opportunities</li>
            <li>Life skills</li>
            <li>Citizenship</li>
            <li>Character education</li>
            <li>Leadership experience</li>
          </ul>
          <p>Fire Explorers also acts as a feeder program for the fire department&mdash;at the age of 18, cadets may apply to the Reserve Division of SMFD and progress through the ranks.</p>
				</div>
				<div className="pageTitle">
					<h2>WHAT WE DO</h2>  
				</div>
				<div className="pageContent">
					<ul>
						<li>Classroom trainings touching basics on some Firefighter I, First Responder, Hazmat Ops.</li>
            <li>Train Explorers to become familiar with the role the fire department plays in the community, how it is structured, and how it functions during normal and emergency activities</li>
            <li>Learn to become self-reliant and self–confident during stressful situations, learn to participate and function as a member of a team, and understand the importance of personal safety as it relates to fire and emergency medical care</li>
            <li>Hands-on and tactical training to enhance skills</li>
            <li>Assist with department events such as Open Houses, St. Michael Dazes and Knights, and National Night Out</li>
            <li>Community services projects: collecting toys for “Caring for Kids”, Hosting Santa at the Fire Station</li>
            <li>Fundraising: Car wash, selling supporter T-Shirts, Etc.</li>
            <li>Participate in competitions/training events with other Explorer posts</li>
					</ul>
        </div>
				<div className="pageTitle">
					<h2>BENEFITS OF BEING AN EXPLORER</h2>  
				</div>
				<div className="pageContent">
					<ul>
						<li>Great learning experience and insight into the fire service</li>
            <li>Offers a chance for community involvement and volunteer opportunities</li>
            <li>Build lasting friendships in a wide group dynamic</li>
            <li>Potential recommendation from Advisors to apply for the fire department at age 18</li>
            <li>The program is free to enroll in (annual dues to Learning of life are paid for by the SMFD)</li>
            <li>Program expenses (shirt, supplies, etc.) are paid through fundraising and Donations</li>
            <li>Chances to apply for Scholarships given by the Learning for Life program</li>
					</ul>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default ExplorerAbout;
