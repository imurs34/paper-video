import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import pdfmap from "../pdfmap1.json";
import {
  Document,
  Font,
  Page,
  Text,
  Image,
  StyleSheet,
  PDFViewer,
  View,
  Note,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    height: "100rem",
    width: "100rem",
  },
  title: {
    color: "#000000",
    fontWeight: 400,
    textDecoration: "none",
    verticalAlign: "baseline",
    fontSize: "17.2pt",
    // fontFamily: '"Arial"',
    fontStyle: "normal",
  },
  c246: {
    color: "#000000",
    // fontWeight: 400,
    // textDecoration: "none",
    // verticalAlign: "baseline",
    // fontSize: "17.2pt",
    // fontStyle: "normal",
    fontWeight: 900,
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  hightlight: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    backgroundColor: "yellow",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
  },
  c177: {
    marginLeft: "11.6pt",
    paddingTop: "0.2pt",
    textIndent: "9.8pt",
    paddingBottom: "0pt",
    lineHeight: 1.0232226848602295,
    textAlign: "justify",
    marginRight: "0.1pt",
  },
  c106: {
    paddingTop: "0pt",
    paddingBottom: "0pt",
    lineHeight: 1,
    textAlign: "center",
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
);

function PdfView({ paragraphs }) {
  return (
    <PDFViewer width={1000} height={1000} showToolbar={false}>
      <Document>
        <Page style={styles.body} wrap>
          <Text className="c106">
            <Text className="c246">
              VisiFit: Structuring Iterative Improvement for Novice Designers
            </Text>
          </Text>
          <View className="c110">
            <Text className="c20">Lydia B. Chilton </Text>
          </View>
          <View className="c80">
            <Text className="c98">
              chilton@cs.columbia.edu Columbia University New York, New York,
              USA
            </Text>
          </View>
          <View className="c167">
            <Text className="c20">Sam Ross </Text>
          </View>
          <View className="c85 c87">
            <Text className="c98">shr@barnard.edu </Text>
          </View>
          <View className="c12">
            <Text className="c98">Barnard College </Text>
          </View>
          <View className="c39">
            <Text className="c98">New York, New York, USA </Text>
          </View>
          <View className="c200">
            <Text className="c20">Ecenaz Jen Ozmen </Text>
            <Text className="c98">
              eo2419@columbia.edu Columbia University New York, New York, USA
            </Text>
          </View>
          <View className="c235">
            <Text className="c20">Vivian Liu </Text>
          </View>
          <View className="c134">
            <Text className="c98">
              vivian@cs.columbia.edu Columbia University New York, New York, USA
            </Text>
          </View>
          <View className="c141">
            <View
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "672.55px",
                height: "216.01px",
              }}
            >
              <Image
                alt=""
                src="images/image5.png"
                style={{
                  width: "672.55px",
                  height: "216.01px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </View>
          </View>
          <View className="c59">
            <Text className="c5">
              Figure 1: Two examples of how the VisiFit system can improve a
              visual blend prototype in under 4 minutes. The left image blends{" "}
            </Text>
            <Text className="c32">New York City </Text>
            <Text className="c5">and </Text>
            <Text className="c32">autumn</Text>
            <Text className="c5">. The right image blends </Text>
            <Text className="c32">navel orange </Text>
            <Text className="c5">and </Text>
            <Text className="c32">winter</Text>
            <Text className="c5">. </Text>
          </View>
          <View className="c155">
            <Text className="c2">ABSTRACT </Text>
          </View>
          <View className="c144">
            <Text className="c5">
              Visual blends are an advanced graphic design technique to seam{" "}
            </Text>
            <Text className="c3">
              lessly integrate two objects into one. Existing tools help novices
              cre{" "}
            </Text>
            <Text className="c3">
              ate prototypes of blends, but it is unclear how they would improve{" "}
            </Text>
            <Text className="c3">
              them to be higher fdelity. To help novices, we aim to add
              structure to the iterative improvement process. We introduce a
              method for im proving prototypes that uses{" "}
            </Text>
            <Text className="c8">secondary design dimensions </Text>
            <Text className="c3">
              to explore a structured design space. This method is grounded in
              the cognitive{" "}
            </Text>
            <Text className="c5">
              principles of human visual object recognition. We present VisiFit{" "}
            </Text>
            <Text className="c11">
              – a computational design system that uses this method to enable{" "}
            </Text>
            <Text className="c5">
              novice graphic designers to improve blends with computationally{" "}
            </Text>
            <Text className="c5">
              generated options they can select, adjust, and chain together. Our{" "}
            </Text>
            <Text className="c3">
              evaluation shows novices can substantially improve 76% of blends{" "}
            </Text>
            <Text className="c3">
              in under 4 minutes. We discuss how the method can be generalized
            </Text>
          </View>
          <View className="c124">
            <Text className="c1">
              Permission to make digital or hard copies of all or part of this
              work for personal or{" "}
            </Text>
            <Text className="c13">
              classroom use is granted without fee provided that copies are not
              made or distributed{" "}
            </Text>
            <Text className="c13">
              for proft or commercial advantage and that copies bear this notice
              and the full citation on the frst page. Copyrights for components
              of this work owned by others than ACM must be honored. Abstracting
              with credit is permitted. To copy otherwise, or republish, to post
              on servers or to redistribute to lists, requires prior specifc
              permission and/or a{" "}
            </Text>
            <Text className="c1">
              fee. Request permissions from permissions@acm.org.
            </Text>
          </View>
          <View className="c50">
            <Text className="c0">CHI ’21, May 8–13, 2021, Yokohama, Japan</Text>
          </View>
          <View className="c187">
            <Text className="c1">
              © 2021 Association for Computing Machinery.{" "}
            </Text>
          </View>
          <View className="c85 c254">
            <Text className="c1">
              ACM ISBN 978-1-4503-8096-6/21/05. . . $15.00{" "}
            </Text>
          </View>
          <View className="c85 c271">
            <Text className="c1">https://doi.org/10.1145/3411764.3445089 </Text>
          </View>
          <View className="c54">
            <Text className="c3">
              to other blending problems, and how computational tools can sup{" "}
            </Text>
            <Text className="c3">
              port novices by enabling them to explore a structured design space{" "}
            </Text>
            <Text className="c5">quickly and efciently. </Text>
          </View>
          <View className="c280">
            <Text className="c2">CCS CONCEPTS </Text>
          </View>
          <View className="c25">
            <Text className="c5">
              • Human-centered computing → Interactive systems and tools.
            </Text>
          </View>
          <View className="c79">
            <Text className="c2">KEYWORDS </Text>
          </View>
          <View className="c227">
            <Text className="c5">
              Computational design, Design tools, Iterative design
            </Text>
          </View>
          <View className="c136">
            <Text className="c65">ACM Reference Format: </Text>
          </View>
          <View className="c218">
            <Text className="c9">
              Lydia B. Chilton, Ecenaz Jen Ozmen, Sam Ross, and Vivian Liu.
              2021. VisiFit:{" "}
            </Text>
            <Text className="c9">
              Structuring Iterative Improvement for Novice Designers. In{" "}
            </Text>
            <Text className="c10">CHI Conference </Text>
            <Text className="c10">
              on Human Factors in Computing Systems (CHI ’21), May 8–13, 2021,
              Yokohama, Japan.{" "}
            </Text>
            <Text className="c9">
              ACM, New York, NY, USA, 14 pages. https://doi.org/10.1145/3411764.{" "}
            </Text>
            <Text className="c65">3445089 </Text>
          </View>
          <View className="c74">
            <Text className="c2">1 INTRODUCTION </Text>
          </View>
          <View className="c251">
            <Text className="c3">
              Iterative improvement is the essence of the iterative design
              process. No design is perfect at inception, thus iteration through
              prototypes{" "}
            </Text>
            <Text className="c11">
              is necessary to improve it. If a prototype passes an evaluation,
              it{" "}
            </Text>
            <Text className="c5">
              should become a new, higher fdelity prototype that can be tested{" "}
            </Text>
            <Text className="c11">
              and potentially iterated upon again. In case studies of improved
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              CHI ’21, May 8–13, 2021, Yokohama, Japan Chilton, et al.
            </Text>
          </View>
          <View className="c221">
            <Text className="c5">
              software usability by the Nielsen Norman Group [
            </Text>
            <Text className="c5">40</Text>
            <Text className="c5">], median im </Text>
            <Text className="c3">
              provement perstage of iteration was 38%, leading to overall
              usability{" "}
            </Text>
            <Text className="c11">
              improvements of 165%. Iteration is not just an aspect of usability{" "}
            </Text>
            <Text className="c11">
              engineering, it is a fundamental part of the design process that
              generalizes across many domains. In web design, designers start{" "}
            </Text>
            <Text className="c5">
              with a wireframe prototype and move to a minimum viable prod{" "}
            </Text>
            <Text className="c11">
              uct. In mechanical design, designers improve upon initial proofs{" "}
            </Text>
            <Text className="c5">
              of concept by iterating upon features and prototype reliability.
              In{" "}
            </Text>
            <Text className="c11">
              graphic design, designers sketch prototypes and then move onto{" "}
            </Text>
            <Text className="c5">
              higher-fdelity mockups. In each domain, iteration looks diferent,{" "}
            </Text>
            <Text className="c11">
              but the objective is the same – to extend the prototype to move
              closer to the goal. To help novice designers in a meaningful and{" "}
            </Text>
            <Text className="c5">
              practical way, we need tools to support iteration.
            </Text>
          </View>
          <View className="c231">
            <Text className="c3">
              Although there are many existing toolsthatsupport other phases{" "}
            </Text>
            <Text className="c5">
              of the design process such as brainstorming, prototyping, evalua{" "}
            </Text>
            <Text className="c3">
              tion, and fnal design execution, there is a lack of tools focusing
              on{" "}
            </Text>
            <Text className="c11">iteration [</Text>
            <Text className="c5">17</Text>
            <Text className="c11">
              ]. Only 6% of 148 creativity support tools from 1999-{" "}
            </Text>
            <Text className="c3">
              2018 focus on iteration. Iteration tools are similar to
              brainstorming{" "}
            </Text>
            <Text className="c11">
              and prototyping tools in that they help people explore a design{" "}
            </Text>
            <Text className="c3">
              space. However, they are more difcult to build because they have{" "}
            </Text>
            <Text className="c11">
              more constraints. Unlike general prototyping tools, iterating on{" "}
            </Text>
            <Text className="c3">
              prototypes must be constrained further to build on ideas that were
              validated in the previous prototypes. Iteration still involves
              search{" "}
            </Text>
            <Text className="c11">
              ing the design space, but the tools that were previously used to{" "}
            </Text>
            <Text className="c3">
              explore an expansive design space are not the right tools to
              explore{" "}
            </Text>
            <Text className="c5">a more constrained one. </Text>
          </View>
          <View className="c135">
            <Text className="c3">
              Like all prototyping tools, iteration tools must be domain-specifc
              so they can efectively operate on the materials of that domain. We{" "}
            </Text>
            <Text className="c3">
              focus on the difcult design challenge of making visual blends [
            </Text>
            <Text className="c5">3</Text>
            <Text className="c3">]. </Text>
            <Text className="c11">
              Visual blends are an advanced graphic design technique used to
              convey a message visually in journalism, advertising, and public
              service announcements. They combine two visual symbols into one
              object to convey a new meaning. For example, in Figure 1{" "}
            </Text>
            <Text className="c5">
              the Guggenheim Museum is blended with an acorn to convey the{" "}
            </Text>
            <Text className="c11">message </Text>
            <Text className="c42">“Visit New York City this autumn”</Text>
            <Text className="c11">. Visual blends are a </Text>
            <Text className="c5">
              canonical example of a creative design challenge [
            </Text>
            <Text className="c5">25</Text>
            <Text className="c5">, </Text>
            <Text className="c5">43</Text>
            <Text className="c5">] because </Text>
            <Text className="c3">
              they are open-ended enough to encapsulate all aspects of the
              design{" "}
            </Text>
            <Text className="c11">
              process, but well-defned enough to test in a short time frame.{" "}
            </Text>
            <Text className="c3">
              Moreover, cognitive scientists consider blending to be an
              important aspect of general creativity forits ability to “create
              new meaning out of old.” [
            </Text>
            <Text className="c5">15</Text>
            <Text className="c3">
              ] Currently, tools already exist to help people brainstorm{" "}
            </Text>
            <Text className="c11">and create initial prototypes [</Text>
            <Text className="c5">9</Text>
            <Text className="c11">] by fnding the right images and </Text>
            <Text className="c3">
              arrangements to use for the blend. However, visual blends
              generally{" "}
            </Text>
            <Text className="c5">
              require an expert with Photoshop skills to execute the design and{" "}
            </Text>
            <Text className="c11">
              it would be faster, easier, and more empowering for novices to{" "}
            </Text>
            <Text className="c5">
              improve blends by themselves, without relying on an expert.
            </Text>
          </View>
          <View className="c208">
            <Text className="c5">
              We perform several formative studies to learn how experts ap{" "}
            </Text>
            <Text className="c3">
              proach the iterative improvement of visual blends. From an
              analysis of blends created by experts and a participatory design
              process with{" "}
            </Text>
            <Text className="c5">
              graphic designers, we learned that blends do not simply blend the{" "}
            </Text>
            <Text className="c3">
              surface-levelstyle of two objects, they combine the secondary
              visual{" "}
            </Text>
            <Text className="c11">
              dimensions of both objects such as silhouette, color and internal{" "}
            </Text>
            <Text className="c3">
              details. Based on this observation, we present a method for
              structur ing the iterative improvement process of blends based on{" "}
            </Text>
            <Text className="c8">secondary </Text>
            <Text className="c8">design dimensions</Text>
            <Text className="c3">
              . In this method, the improvement process is frst{" "}
            </Text>
            <Text className="c11">
              broken into stages that blend each of the dimensions separately.
            </Text>
          </View>
          <View className="c171">
            <Text className="c5">
              Then the results of each stage are combined into a single blended{" "}
            </Text>
            <Text className="c5">output. </Text>
          </View>
          <View className="c114">
            <Text className="c11">
              We present VisiFit – a computational design tool that allows{" "}
            </Text>
            <Text className="c3">
              novice graphic designers to improve a prototype of a visual blend.
              A prior system called VisiBlends [
            </Text>
            <Text className="c5">9</Text>
            <Text className="c3">
              ] helps novices create rough initial prototypes of blends by
              overlaying two objects with the same shape.{" "}
            </Text>
            <Text className="c3">
              VisiFit helps users refne those rough prototypes into seamless and{" "}
            </Text>
            <Text className="c5">
              aesthetic blends. VisiFit structures the process of creating
              second{" "}
            </Text>
            <Text className="c11">
              iterations by introducing a pipeline of computational tools that{" "}
            </Text>
            <Text className="c3">
              allow users to quickly and easily edit secondary design
              dimensions.{" "}
            </Text>
            <Text className="c11">
              Figure 1 shows two examples of the VisiBlends output and the{" "}
            </Text>
            <Text className="c3">
              result of novices using VisiFit to improve them in under 4
              minutes.{" "}
            </Text>
            <Text className="c11">
              Our evaluation shows that novices can quickly and easily iterate{" "}
            </Text>
            <Text className="c5">
              on prototypes to create seamless and aesthetic blends.
            </Text>
          </View>
          <View className="c27">
            <Text className="c5">
              This paper makes the following contributions:{" "}
            </Text>
          </View>
          <View className="c30">
            <Text className="c5">• </Text>
            <Text className="c3">
              Three preliminary investigations into the process of improv{" "}
            </Text>
            <Text className="c11">
              ing prototypes of visual blends: a demonstration of how{" "}
            </Text>
            <Text className="c3">
              fully automatic systems fail, an analysis of patterns used by{" "}
            </Text>
            <Text className="c5">
              professionals, and a co-design process with graphic artists.
            </Text>
          </View>
          <View className="c230">
            <Text className="c5">• </Text>
            <Text className="c11">
              Three design principles for a computational approach to{" "}
            </Text>
            <Text className="c5">improving visual blends. </Text>
          </View>
          <View className="c129">
            <Text className="c5">• </Text>
            <Text className="c3">
              A method of using secondary design dimensions to structure{" "}
            </Text>
            <Text className="c11">
              the improvement process. This method is grounded in the{" "}
            </Text>
            <Text className="c5">
              neuroscience of human visual object recognition.{" "}
            </Text>
          </View>
          <View className="c206">
            <Text className="c5">
              • VisiFit, a system that applies the method and design princi ples
              in a pipeline of computational tools.
            </Text>
          </View>
          <View className="c169">
            <Text className="c5">• </Text>
            <Text className="c11">
              An evaluation of VisiFit showing that in under 4 minutes,{" "}
            </Text>
            <Text className="c3">
              novices can substantially improve blends in 76% of cases and{" "}
            </Text>
            <Text className="c11">
              create blends suitable to publish on social media in 70% of{" "}
            </Text>
            <Text className="c5">cases. </Text>
          </View>
          <View className="c126">
            <Text className="c3">
              We conclude with a discussion of how secondary design dimen{" "}
            </Text>
            <Text className="c3">
              sions can help structure iteration in other felds and how
              pipelines{" "}
            </Text>
            <Text className="c3">
              of computational design tools can support the iterative design pro{" "}
            </Text>
            <Text className="c5">cess. </Text>
          </View>
          <View className="c47">
            <Text className="c2">2 RELATED WORK </Text>
          </View>
          <View className="c142">
            <Text className="c2">2.1 Design Tools </Text>
          </View>
          <View className="c199">
            <Text className="c5">
              Design tools and creativity support tools (CSTs) have a rich tradi{" "}
            </Text>
            <Text className="c5">
              tion of accelerating innovation and discovery [
            </Text>
            <Text className="c5">49</Text>
            <Text className="c5">] by supporting </Text>
            <Text className="c5">
              the design process. A survey of 143 papers from 1999-2018 on cre{" "}
            </Text>
            <Text className="c3">
              ativity support tools (CSTs) found that there are papers
              supporting{" "}
            </Text>
            <Text className="c11">
              all phases of the design process: ideation, exploration, prototyp{" "}
            </Text>
            <Text className="c3">
              ing, implementation, evaluation, and process/pipeline, and
              iteration. [
            </Text>
            <Text className="c5">17</Text>
            <Text className="c3">
              ]. Many of these tools support more than one phase of the design{" "}
            </Text>
            <Text className="c5">
              process. However, not all phases of the design process are equally{" "}
            </Text>
            <Text className="c11">
              represented in the literature. In fact, a majority of these tools
              fo{" "}
            </Text>
            <Text className="c3">
              cused on either very early or very late phases of the design
              process.{" "}
            </Text>
            <Text className="c11">
              Of the systems in the survey, 45% support ideation [
            </Text>
            <Text className="c5">30</Text>
            <Text className="c11">, </Text>
            <Text className="c5">50</Text>
            <Text className="c11">, </Text>
            <Text className="c5">59</Text>
            <Text className="c11">], </Text>
            <Text className="c5">
              41% support implementation, including high-fdelity tools [
            </Text>
            <Text className="c5">57</Text>
            <Text className="c5">] or </Text>
            <Text className="c3">
              low-fdelity tools for prototyping or sketching [
            </Text>
            <Text className="c5">10</Text>
            <Text className="c3">, </Text>
            <Text className="c5">21</Text>
            <Text className="c3">, </Text>
            <Text className="c5">31</Text>
            <Text className="c3">, </Text>
            <Text className="c5">32</Text>
            <Text className="c3">], and </Text>
            <Text className="c5">
              18% supported evaluation through feedback [
            </Text>
            <Text className="c5">36</Text>
            <Text className="c5">, </Text>
            <Text className="c5">63</Text>
            <Text className="c5">] or expert an </Text>
            <Text className="c3">notation [</Text>
            <Text className="c5">51</Text>
            <Text className="c3">
              ]. However, only 6% of the systems surveyed supported{" "}
            </Text>
            <Text className="c11">
              iteration, and only 4% supported the related task of design man{" "}
            </Text>
            <Text className="c5">
              agement or pipelines. More research is needed on how to support{" "}
            </Text>
            <Text className="c3">
              iteration more efectively — that is, how to help designers improve
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              VisiFit: Structuring Iterative Improvement for Novice Designers
              CHI ’21, May 8–13, 2021, Yokohama, Japan
            </Text>
          </View>
          <View className="c62">
            <Text className="c5">
              on an initial prototype to get closer to their fnal design goal.
              Our{" "}
            </Text>
            <Text className="c5">
              work in this paper focuses on this problem.{" "}
            </Text>
          </View>
          <View className="c97">
            <Text className="c2">2.2 Iteration Support </Text>
          </View>
          <View className="c252">
            <Text className="c11">
              Existing systems that explicitly aid iteration use a number of ap{" "}
            </Text>
            <Text className="c3">
              proaches. One class of iteration applications uses crowds to
              iterate{" "}
            </Text>
            <Text className="c11">towards better solutions [</Text>
            <Text className="c5">33</Text>
            <Text className="c11">]. This can be by mixing features of </Text>
            <Text className="c3">previous designs [</Text>
            <Text className="c5">66</Text>
            <Text className="c3">], responding to community feedback [</Text>
            <Text className="c5">27</Text>
            <Text className="c3">], hir </Text>
            <Text className="c5">ing experts [</Text>
            <Text className="c5">45</Text>
            <Text className="c5">
              ], or identifying weak points and fxing them [
            </Text>
            <Text className="c5">28</Text>
            <Text className="c5">]. </Text>
            <Text className="c11">
              All of these use the strength of multiple people’s viewpoints to{" "}
            </Text>
            <Text className="c3">
              iterate. However, crowds can introduce errors and may be difcult{" "}
            </Text>
            <Text className="c5">
              to steer toward your particular vision. Therefore, it is often
              useful{" "}
            </Text>
            <Text className="c5">
              to provide designers with single user tools for iteration.
            </Text>
          </View>
          <View className="c239">
            <Text className="c3">
              Another class of iteration tools has the user produce a prototype,{" "}
            </Text>
            <Text className="c11">
              and then computationally generate the rest of the design. If the{" "}
            </Text>
            <Text className="c3">
              user is unhappy with the outcome, they can regenerate, alter their{" "}
            </Text>
            <Text className="c3">
              input, or adjust parameters. Several applications apply this
              method{" "}
            </Text>
            <Text className="c5">
              to generate multi-tracked music from a simple input melody. This{" "}
            </Text>
            <Text className="c3">
              can be done using rules and constraints [
            </Text>
            <Text className="c5">14</Text>
            <Text className="c3">, </Text>
            <Text className="c5">61</Text>
            <Text className="c3">] or implicit patterns </Text>
            <Text className="c5">learned by deep learning [</Text>
            <Text className="c5">35</Text>
            <Text className="c5">]. Having the computer generate out </Text>
            <Text className="c5">
              comes is especially usable for novices; it allows them to
              recognize{" "}
            </Text>
            <Text className="c5">
              good outcomes, even if they cannot produce them. This seems to{" "}
            </Text>
            <Text className="c5">
              work well in music, which has many mathematical rules, but it is{" "}
            </Text>
            <Text className="c5">
              unclear if it works as well in other domains.{" "}
            </Text>
          </View>
          <View className="c222">
            <Text className="c3">
              A third way to support iteration is to provide rich undo history{" "}
            </Text>
            <Text className="c3">
              to allow users control and freedom while exploring the design
              space. This is often done in the drawing domain both for single
              users [
            </Text>
            <Text className="c5">39</Text>
            <Text className="c3">] </Text>
            <Text className="c11">
              and for multiple users who want to draw collaboratively [
            </Text>
            <Text className="c5">67</Text>
            <Text className="c11">
              ]. In the creative design process, exploration is clearly
              important [
            </Text>
            <Text className="c5">8</Text>
            <Text className="c11">
              ], and supporting that is essential. In VisiFit, we use aspects of
              all{" "}
            </Text>
            <Text className="c3">
              three of these approaches. We target key properties of the
              prototype{" "}
            </Text>
            <Text className="c11">
              that need improving and focus iteration on these properties. We
              provide computational tools to generate outcomes that novices
              could not produce themselves. We allow users to explore design
              alternatives and to adjust parameters so they can achieve results{" "}
            </Text>
            <Text className="c5">they are satisfed with. </Text>
          </View>
          <View className="c137">
            <Text className="c2">
              2.3 Computational Approaches to Design Tools{" "}
            </Text>
            <Text className="c5">
              Computational tools have long been a promising approach to aid{" "}
            </Text>
            <Text className="c11">
              design because they can search a design space and help meet a{" "}
            </Text>
            <Text className="c3">
              constraint. The power of computational or computer-aided design{" "}
            </Text>
            <Text className="c5">
              has been shown in many felds such as: education [
            </Text>
            <Text className="c5">34</Text>
            <Text className="c5">], medicine </Text>
            <Text className="c11">[</Text>
            <Text className="c5">22</Text>
            <Text className="c11">], games [</Text>
            <Text className="c5">52</Text>
            <Text className="c11">], urban planning [</Text>
            <Text className="c5">5</Text>
            <Text className="c11">], and accessibility [</Text>
            <Text className="c5">18</Text>
            <Text className="c11">]. The </Text>
            <Text className="c5">
              system designer must defne the space and the search parameters,{" "}
            </Text>
            <Text className="c3">
              as well as provide design patterns for solutions that can be
              adapted{" "}
            </Text>
            <Text className="c5">to diferent inputs. [2, 64, 65] </Text>
          </View>
          <View className="c61">
            <Text className="c5">
              Computational design tools have had particularly strong adop{" "}
            </Text>
            <Text className="c3">
              tion in graphic design problemslike optimizing layout [
            </Text>
            <Text className="c5">7</Text>
            <Text className="c3">, </Text>
            <Text className="c5">11</Text>
            <Text className="c3">, </Text>
            <Text className="c5">41</Text>
            <Text className="c3">, </Text>
            <Text className="c5">56</Text>
            <Text className="c3">], </Text>
            <Text className="c11">making icons [</Text>
            <Text className="c5">4</Text>
            <Text className="c11">, </Text>
            <Text className="c5">6</Text>
            <Text className="c11">
              ], and providing inspiration through mood boards [
            </Text>
            <Text className="c5">29</Text>
            <Text className="c11">, </Text>
            <Text className="c5">60</Text>
            <Text className="c11">] and relevant examples [</Text>
            <Text className="c5">12</Text>
            <Text className="c11">, </Text>
            <Text className="c5">30</Text>
            <Text className="c11">]. This is also true </Text>
            <Text className="c3">
              in the 3D domain, where computational tools can be used to search{" "}
            </Text>
            <Text className="c5">
              a design space and create multiple mesh and texture variations of{" "}
            </Text>
            <Text className="c5">
              objects (i.e. trees or airplanes) that can make computer generated
              scenes more diverse [
            </Text>
            <Text className="c5">37</Text>
            <Text className="c5">, </Text>
            <Text className="c5">54</Text>
            <Text className="c5">]. Deep learning has also been applied </Text>
            <Text className="c3">
              to generate new designs that ft user specifcations [
            </Text>
            <Text className="c5">38</Text>
            <Text className="c3">, </Text>
            <Text className="c5">62</Text>
            <Text className="c3">]. In this </Text>
            <Text className="c3">
              paper, we address a specifc kind of graphic design problem of that
            </Text>
          </View>
          <View className="c266">
            <Text className="c11">
              requires blending two objects into one in order to convey a new
              meaning. To our knowledge, none of the existing computational{" "}
            </Text>
            <Text className="c5">
              design tools have addressed this problem.{" "}
            </Text>
          </View>
          <View className="c132">
            <Text className="c5">
              Although these tools can be fully automatic, some of the most{" "}
            </Text>
            <Text className="c11">
              useful tools are interactive and allow users to explore and guide
              the process. We take much inspiration from Side Views [
            </Text>
            <Text className="c5">55</Text>
            <Text className="c11">
              ], an application that allows users to preview the efect of
              various im age editing menu options, like those in Photoshop. By
              providing previews, users are able to recognize rather than recall
              the right{" "}
            </Text>
            <Text className="c5">
              tool to use. This also helps users adjust parameters of key proper{" "}
            </Text>
            <Text className="c11">
              ties and chain tools together to explore an even wider section of{" "}
            </Text>
            <Text className="c5">
              the search space. In VisiFit, we also take the interactive
              approach{" "}
            </Text>
            <Text className="c11">
              to computational design. Like Side Views, VisiFit allows users to{" "}
            </Text>
            <Text className="c3">
              preview and adjust tools, as well as chain them together. However,{" "}
            </Text>
            <Text className="c3">
              VisiFit is not just a tool for exploration - it is targeted at
              achieving a{" "}
            </Text>
            <Text className="c3">
              specifc goal; multiple tools are chained together in a pipeline
              that{" "}
            </Text>
            <Text className="c3">
              explores each of the three key visual properties needed to
              complete a blend. This allows the user to explore the design space
              and iterate{" "}
            </Text>
            <Text className="c5">
              in a structured fashion towards their goal.{" "}
            </Text>
          </View>
          <View className="c210">
            <Text className="c2">3 BACKGROUND: VISUAL BLENDS </Text>
            <Text className="c11">
              Visual blends are an advanced graphic design technique where{" "}
            </Text>
            <Text className="c3">
              two objects are blended into one to convey a message symbolically.{" "}
            </Text>
            <Text className="c5">
              They represent a canonical and very challenging design problem{" "}
            </Text>
            <Text className="c11">[</Text>
            <Text className="c5">3</Text>
            <Text className="c11">
              ] because the two objects must be blended into one object, yet
              still remain individually identifable so the viewer can tell what{" "}
            </Text>
            <Text className="c3">
              objects were blended. When asked to defne design, Charles Eames{" "}
            </Text>
            <Text className="c5">once said, </Text>
            <Text className="c32">
              “Design is a plan for arranging elements to accomplish a{" "}
            </Text>
            <Text className="c32">particular purpose”. </Text>
            <Text className="c5">[</Text>
            <Text className="c5">42</Text>
            <Text className="c5">
              ] In a visual blend, the objects to blend are{" "}
            </Text>
            <Text className="c11">the </Text>
            <Text className="c42">elements</Text>
            <Text className="c11">, the way they overlap is their </Text>
            <Text className="c42">arrangement</Text>
            <Text className="c11">
              , and the particular purpose is the seamless blend of the objects
              to convey a message. Because they are a difcult design challenge,
              visual blends are studied by several diverse felds. In cognitive
              science,{" "}
            </Text>
            <Text className="c3">
              researchers study how creativity emerges from conceptual blending{" "}
            </Text>
            <Text className="c3">[</Text>
            <Text className="c5">43</Text>
            <Text className="c3">
              ]. In visual communication, researcher study how visual blends{" "}
            </Text>
            <Text className="c5">
              convey meaning through through context and implicature rather{" "}
            </Text>
            <Text className="c5">than through explicit language [</Text>
            <Text className="c5">15</Text>
            <Text className="c5">, </Text>
            <Text className="c5">16</Text>
            <Text className="c5">, </Text>
            <Text className="c5">44</Text>
            <Text className="c5">, </Text>
            <Text className="c5">58</Text>
            <Text className="c5">]. Creativity and cog </Text>
            <Text className="c5">
              nition researchers study how computers might achieve creativity{" "}
            </Text>
            <Text className="c5">by creating visual blends [26]. </Text>
          </View>
          <View className="c261">
            <Text className="c3">An existing system called VisiBlends [</Text>
            <Text className="c5">9</Text>
            <Text className="c3">] helps novices with the </Text>
            <Text className="c3">
              frst step of the design process: creating a prototype. Figure 2
              shows{" "}
            </Text>
            <Text className="c5">
              an illustration of the VisiBlends workfow to create a visual blend{" "}
            </Text>
            <Text className="c5">for the message </Text>
            <Text className="c32">“Visit New York this autumn”</Text>
            <Text className="c5">. The user must frst </Text>
            <Text className="c5">
              identify two abstract concepts to visually blend, for example,{" "}
            </Text>
            <Text className="c32">New </Text>
            <Text className="c42">York City </Text>
            <Text className="c11">and </Text>
            <Text className="c42">autumn</Text>
            <Text className="c11">
              . Next, the users must brainstorm simple,{" "}
            </Text>
            <Text className="c3">
              iconic objects associated with the concepts. From their list of
              asso{" "}
            </Text>
            <Text className="c3">
              ciated objects, they must fnd images of those objects that can
              serve as symbols of the concept. For each image, users annotate
              the main{" "}
            </Text>
            <Text className="c3">
              shape of the object (i.e. whether it is a sphere, cylinder, box,
              circle,{" "}
            </Text>
            <Text className="c11">
              or rectangle) and whether the shape covers “all of the object” or{" "}
            </Text>
            <Text className="c5">
              “part of the object”. With the images and annotations, VisiBlends{" "}
            </Text>
            <Text className="c3">
              automatically searches over all pairs of objects to fnd two that
              have the same basic shape, but for one object the shape covers
              only “part{" "}
            </Text>
            <Text className="c3">
              of the object”. It then automatically synthesizes a prototype of
              the{" "}
            </Text>
            <Text className="c5">
              blend by cropping, scaling, positioning and rotating the objects
              to{" "}
            </Text>
            <Text className="c11">
              ft together. For example, in Figure 2 the acorn is a cylinder and
            </Text>
          </View>
          <View className="c244">
            <Text className="c1">
              CHI ’21, May 8–13, 2021, Yokohama, Japan Chilton, et al.{" "}
            </Text>
            <Text
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "672.55px",
                height: "526.87px",
              }}
            >
              <Image
                alt=""
                src="images/image7.png"
                style={{
                  width: "672.55px",
                  height: "526.87px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </Text>
          </View>
          <View className="c72">
            <Text className="c5">
              Figure 2: An illustration of VisiBlends workfow that helps people
              create prototypes for a blend representing{" "}
            </Text>
            <Text className="c32">“Visit New York this autumn.”</Text>
            <Text className="c5">
              . The VisiBlends prototypes convey the idea, but are often very
              rough. The goal of VisiFit is to improve these initial prototypes
              into seamless and aesthetic blends.
            </Text>
          </View>
          <View className="c268">
            <Text className="c3">
              the “part of” the Guggenheim is also a cylinder. Thus, the acorn
              is{" "}
            </Text>
            <Text className="c3">
              positioned onto the cylindrical part of the Guggenheim to produce{" "}
            </Text>
            <Text className="c5">
              a blend prototype where both the acorn and the Guggenheim are{" "}
            </Text>
            <Text className="c3">
              visible. Lastly, the user selects the best prototype based on the
              shape{" "}
            </Text>
            <Text className="c5">
              ft and the meaning implied by the blend. Once the user selects a{" "}
            </Text>
            <Text className="c5">
              prototype, they must complete the fnished design either on their{" "}
            </Text>
            <Text className="c5">own or by hiring a graphic artist. </Text>
          </View>
          <View className="c233">
            <Text className="c3">
              The reason VisiBlends matches objects on shape is based on the{" "}
            </Text>
            <Text className="c3">
              neuroscience of human visual object recognition. The human visual
              object recognition system is hierarchical in what features it uses
              to recognize an object [
            </Text>
            <Text className="c5">53</Text>
            <Text className="c3">
              ]. 3D shape isthe primary feature used by the{" "}
            </Text>
            <Text className="c5">
              brain to determine what an object is; after that, it uses
              secondary{" "}
            </Text>
            <Text className="c11">
              features like color, distinct edges and surface information [
            </Text>
            <Text className="c5">46</Text>
            <Text className="c11">]. </Text>
            <Text className="c5">
              By combining two objects that have the same shape but diferent
            </Text>
          </View>
          <View className="c182">
            <Text className="c3">
              secondary details, the objects will appear blended into one, yet
              still{" "}
            </Text>
            <Text className="c5">
              individually identifable – which is one of the major challenges of
              creating a visual blend.
            </Text>
          </View>
          <View className="c168">
            <Text className="c2">
              4 FORMATIVE STUDIES OF BLENDING ITERATION{" "}
            </Text>
          </View>
          <View className="c6">
            <Text className="c3">
              To explore approaches to iteration we conducted three preliminary
              investigations that informed the three design principles we
              propose for improving blends. We tie it all together into a
              general technique{" "}
            </Text>
            <Text className="c5">
              for structuring the iterative improvement of blends.
            </Text>
          </View>
          <View className="c170">
            <Text className="c2">4.1 Shortcomings of Deep Style Transfer </Text>
            <Text className="c3">
              Advances in deep learning have shown impressive results in manip
              ulating images. An early and prominent result is deep style
              transfer
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              VisiFit: Structuring Iterative Improvement for Novice Designers
              CHI ’21, May 8–13, 2021, Yokohama, Japan
            </Text>
          </View>
          <View className="c140">
            <Text className="c11">[</Text>
            <Text className="c5">19</Text>
            <Text className="c11">
              ] which trains a model on a visual style, such as Van Gogh’s{" "}
            </Text>
            <Text className="c5">
              Starry Night, and applies that style on any image to make it look{" "}
            </Text>
            <Text className="c5">
              like Van Gogh painted it in the Starry Night style. This technique{" "}
            </Text>
            <Text className="c11">
              has the potential to automatically improve prototypes of visual
              blends by training on the style of one object and applying it to{" "}
            </Text>
            <Text className="c5">another. </Text>
          </View>
          <View className="c56">
            <Text
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "336.26px",
                height: "203.44px",
              }}
            >
              <Image
                alt=""
                src="images/image6.png"
                style={{
                  width: "336.26px",
                  height: "203.44px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </Text>
          </View>
          <View className="c109">
            <Text className="c5">
              Figure 3: Blends created by Fast Style Transfer (top) com pared to
              blends produced by an artist (bottom). The FST blends fail because
              this problem cannot be solved with an indiscriminate, global
              application of one object’s style onto another. Experts take apart
              and blend objects in a more nu anced way, preserving relevant
              characteristics of each object to keep each one identifable in the
              fnal blend.
            </Text>
          </View>
          <View className="c247">
            <Text className="c11">
              To explore the potential of deep style transfer, we took four
              blend prototypes from the VisiBlends test set, and applied deep
              style transfer to them. For each pair of images in the blend, we{" "}
            </Text>
            <Text className="c3">
              selected which object to learn the style of and which object to
              apply{" "}
            </Text>
            <Text className="c3">
              the style to. We used an implementation of style transfer from the{" "}
            </Text>
            <Text className="c11">
              popular Fast Style Transfer (FST) paper [
            </Text>
            <Text className="c5">19</Text>
            <Text className="c11">] which only requires </Text>
            <Text className="c11">
              a single image to learn style from and has impressive results on{" "}
            </Text>
            <Text className="c3">
              transferring artistic style. We tried multiple combinations of
              hyper{" "}
            </Text>
            <Text className="c11">
              parameters (epochs, batch size, and iterations) until we saw no{" "}
            </Text>
            <Text className="c3">
              noticeable improvements in the results. We also tried input images{" "}
            </Text>
            <Text className="c11">
              of the same object and diferent ways of cropping it, in case the{" "}
            </Text>
            <Text className="c5">
              algorithm was sensitive to any particular image.{" "}
            </Text>
          </View>
          <View className="c223">
            <Text className="c11">
              Although the algorithm was able to extract styles and apply them,
              the results fell far short of the bar for creating convincing{" "}
            </Text>
            <Text className="c3">
              blends. Figure 3 shows Deep Style Transfer results (top) and
              blends{" "}
            </Text>
            <Text className="c5">
              made by artists we commissioned to produce high fdelity blends.{" "}
            </Text>
            <Text className="c11">To blend </Text>
            <Text className="c42">orange </Text>
            <Text className="c11">and </Text>
            <Text className="c42">baseball</Text>
            <Text className="c11">, FST frst learned the orange style. </Text>
            <Text className="c3">
              However, when it applied that learned style to the baseball, while
              it{" "}
            </Text>
            <Text className="c5">
              preserved the baseball’s characteristic red seams, it simply
              turned{" "}
            </Text>
            <Text className="c3">
              its white texture into a blotchy orange color that is not
              reminiscent{" "}
            </Text>
            <Text className="c5">
              of the fruit. In contrast, the artist who blended it used the
              texture{" "}
            </Text>
            <Text className="c3">
              and stem of the orange, in addition to the red seams of the
              baseball.{" "}
            </Text>
            <Text className="c11">
              This made both objects highly identifable. The computer used the
              overall look of the orange, but didn’t separately consider its{" "}
            </Text>
            <Text className="c5">
              elements as it mixed and matched the parts.{" "}
            </Text>
          </View>
          <View className="c152">
            <Text className="c3">Similarly, for the </Text>
            <Text className="c8">apple </Text>
            <Text className="c3">and </Text>
            <Text className="c8">burger </Text>
            <Text className="c3">blend, the burger style applied </Text>
            <Text className="c3">
              to the apple just turned the apple brown, because the predominant{" "}
            </Text>
            <Text className="c3">
              color of a burger is brown. We also explored what would happen if{" "}
            </Text>
            <Text className="c11">
              we isolated part of the image by hand and applied the style only
              within that area. To mimic the artist, we isolated the burger bun
              and applied the apple style to it. The results are better, but
              still disappointing. Although the burger has the color and texture
              of{" "}
            </Text>
            <Text className="c5">
              an apple, it does not appear as blended as the artist’s version.
              The{" "}
            </Text>
            <Text className="c3">
              artist chose to mix the apple color and the bun color to give a
              sense{" "}
            </Text>
            <Text className="c5">of </Text>
            <Text className="c32">both objects </Text>
            <Text className="c5">in that element. </Text>
          </View>
          <View className="c264">
            <Text className="c11">
              We conclude that these existing style transfer results do not
              easily apply to visual blends. Blends are not just about applying{" "}
            </Text>
            <Text className="c3">
              high-level “style”, they require designers to consider the
              individual{" "}
            </Text>
            <Text className="c3">
              elements and how they might be ft together. If we trained a model{" "}
            </Text>
            <Text className="c3">
              on thousands of visual blends, we might be able to make progress
              on this problem, but we would need to create those thousands of
              visual{" "}
            </Text>
            <Text className="c5">
              blends, and even so, results would not be guaranteed. Instead we{" "}
            </Text>
            <Text className="c3">
              want to explore semi-automatic approaches that augment people’s{" "}
            </Text>
            <Text className="c5">ability to create blends. </Text>
          </View>
          <View className="c205">
            <Text className="c5">
              Design Principle 1. To help users achieve better results than
              fully automatic systems, structure the problem into subtasks and
              provide interactive tools specifc to each sub task.{" "}
            </Text>
            <Text className="c5">
              Fully automatic tools do not always achieve desired results{" "}
            </Text>
            <Text className="c5">
              and give you little control in how to fx them.{" "}
            </Text>
          </View>
          <View className="c269">
            <Text className="c2">4.2 Analysis of professional blends </Text>
          </View>
          <View className="c201">
            <Text className="c11">
              To investigate potential structures for improving blends we ana{" "}
            </Text>
            <Text className="c3">
              lyzed how professional artists improved prototypes. We paid three{" "}
            </Text>
            <Text className="c5">
              professional artists to make visual blends based on 13 prototypes{" "}
            </Text>
            <Text className="c5">
              made by novices using VisiBlends. Of those 13 images, the artists{" "}
            </Text>
            <Text className="c5">
              told us that two did not need editing because the output from Vis{" "}
            </Text>
            <Text className="c11">
              iBlends was a perfectly acceptable blend. However, the other 11{" "}
            </Text>
            <Text className="c5">blends needed signifcant iteration. </Text>
          </View>
          <View className="c176">
            <Text className="c11">
              In our analysis of professionally improved blends, we looked for
              secondary visual dimensions experts used to improve visual{" "}
            </Text>
            <Text className="c3">
              blends. As discussed in the Background section, VisiBlends creates{" "}
            </Text>
            <Text className="c11">
              prototypes by matching two objects with the same basic shape.{" "}
            </Text>
            <Text className="c3">
              This is because neuroscience has discovered that the human visual{" "}
            </Text>
            <Text className="c11">
              object recognition system is hierarchical in what features it uses
              to recognize an object: the primary feature it uses to recognize{" "}
            </Text>
            <Text className="c3">
              and object is its basic 3D shape, and the secondary features it
              uses{" "}
            </Text>
            <Text className="c5">
              to recognize an object are color, distinct edges, and surface
              infor{" "}
            </Text>
            <Text className="c5">
              mation. If prototypes of blends are made by blending the primary{" "}
            </Text>
            <Text className="c5">
              feature used to recognize and object, then it is logical to
              improve{" "}
            </Text>
            <Text className="c5">
              prototypes by blending the secondary features used to recognize{" "}
            </Text>
            <Text className="c5">an object. </Text>
          </View>
          <View className="c211">
            <Text className="c11">
              We performed this visual dimension-based analysis on the 11{" "}
            </Text>
            <Text className="c5">
              improved blends and found that three visual properties were suf{" "}
            </Text>
            <Text className="c5">
              fcient to explain almost all of the improvements the artists made.{" "}
            </Text>
            <Text className="c5">
              Figure 4 shows examples of these dimensions:{" "}
            </Text>
          </View>
          <View className="c82">
            <Text className="c5">• Color</Text>
            <Text className="c3">
              : The frst row shows the result of blending a red Lego{" "}
            </Text>
            <Text className="c5">
              brick and a diamond ring. The initial blend has good shape{" "}
            </Text>
            <Text className="c5">
              ft, but the artist improved the blend by adding the color of{" "}
            </Text>
            <Text className="c3">
              the diamond back into the Lego. This creates the illusion of{" "}
            </Text>
            <Text className="c5">diamond-like facets into the Lego.</Text>
          </View>
          <View className="c106">
            <Text className="c1">
              CHI ’21, May 8–13, 2021, Yokohama, Japan Chilton, et al.
            </Text>
          </View>
          <View className="c139">
            <Text className="c5">• Silhouette</Text>
            <Text className="c3">
              : The second row shows the result of blending an oblong Lego brick
              and a popsicle. The initial blend is decent,{" "}
            </Text>
            <Text className="c5">
              but the artist improved it by applying the silhouette of the{" "}
            </Text>
            <Text className="c3">
              popsicle back into the Lego. (Additionally, they blended the{" "}
            </Text>
            <Text className="c3">
              color of the popsicle back into the Lego. Thislends a textured,{" "}
            </Text>
            <Text className="c11">
              popsicle-like red color to the Lego, rather than a smooth{" "}
            </Text>
            <Text className="c5">plastic-like red.) </Text>
          </View>
          <View className="c240">
            <Text className="c5">• Internal Details</Text>
            <Text className="c3">
              : The third row showsthe result of blending{" "}
            </Text>
            <Text className="c5">
              an orange with the head of a snowman. The initial blend is{" "}
            </Text>
            <Text className="c11">
              clearly a low-fdelity prototype — the idea is clear, but the{" "}
            </Text>
            <Text className="c5">
              details are unrefned. In addition to applying the color and{" "}
            </Text>
            <Text className="c11">
              silhouette of the snowman head, they extracted the facial{" "}
            </Text>
            <Text className="c3">
              details of the snowman head and placed them on the orange.
            </Text>
          </View>
          <View className="c254 c256">
            <Text className="c5">
              Throughout all the examples, we found that artists used one or{" "}
            </Text>
            <Text className="c11">
              more of these three secondary visual dimensions to improve the{" "}
            </Text>
            <Text className="c3">
              prototypes. Note that these dimensions are largely independent of{" "}
            </Text>
            <Text className="c3">
              one another. Thus, we believe that the three visual dimensions can{" "}
            </Text>
            <Text className="c5">
              be used together to guide the process of improving prototypes.
            </Text>
          </View>
          <View className="c96">
            <Text className="c5">
              Design Principle 2. Identify secondary dimensions of the design
              space to structure the iteration process
            </Text>
            <Text className="c11">
              . For visual blends, the key secondary dimension are: color,
              silhouette and{" "}
            </Text>
            <Text className="c3">
              internal details. We refer to this method as using secondary
              design{" "}
            </Text>
            <Text className="c5">dimensions. </Text>
          </View>
          <View className="c173">
            <Text className="c2">4.3 Co-Design with Graphic Artists </Text>
          </View>
          <View className="c260">
            <Text className="c11">
              The three visual dimensions provide high-level structure for im
              proving blends, but we wanted to know if there were actionable
              activities associated with this structure that are useful when im
              proving blends. To investigate this, we worked with two graphic{" "}
            </Text>
            <Text className="c5">
              artists in multiple one-hour sessions over a period of three weeks{" "}
            </Text>
            <Text className="c3">
              to observe and probe their process. Both designers worked in Pho{" "}
            </Text>
            <Text className="c5">
              toshop and had created numerous print ads although neither had{" "}
            </Text>
            <Text className="c11">
              made visual blends before. The goal of these sessions was to in
              troduce them to the secondary visual dimensions and to see a) if{" "}
            </Text>
            <Text className="c5">
              they found them useful to structure their process, b) what actions{" "}
            </Text>
            <Text className="c3">
              they took to improve the blends based on these dimensions, and c){" "}
            </Text>
            <Text className="c5">
              whether novices would be able to replicate their success.
            </Text>
          </View>
          <View className="c101">
            <Text className="c5">
              To familiarize the artists with the concept of visual blends, we{" "}
            </Text>
            <Text className="c11">
              showed them examples of professionally made blends and asked them
              to recreate two of them in Photoshop. They found the task{" "}
            </Text>
            <Text className="c3">
              challenging, but through trial and error they were ultimately
              satis{" "}
            </Text>
            <Text className="c5">
              fed with their results. Next, we introduced them to the principles{" "}
            </Text>
            <Text className="c11">
              of blending based on color, silhouette and details. We discussed{" "}
            </Text>
            <Text className="c5">
              with them how we thought those principles could have been used{" "}
            </Text>
            <Text className="c3">
              to create the blends. Then we gave the artists prototypes of
              blends{" "}
            </Text>
            <Text className="c3">
              and asked them to improve them, referencing the visual dimensions{" "}
            </Text>
            <Text className="c5">when applicable. </Text>
          </View>
          <View className="c234">
            <Text className="c11">
              The concepts of color, silhouette, and internal details were in
              tuitive to the artists, and they readily used them to improve the{" "}
            </Text>
            <Text className="c3">
              blends. Blending color was a familiar idea to them, and it was
              very{" "}
            </Text>
            <Text className="c3">
              easy for them to do in Photoshop. An efective tool one artist used{" "}
            </Text>
            <Text className="c5">
              for blending was the "Multiply" feature, which preserved both the{" "}
            </Text>
            <Text className="c3">
              color and the texture of each object, as seen in the top row of
              Figure{" "}
            </Text>
            <Text className="c5">
              4. Both artists were surprised at how efectively silhouettes could{" "}
            </Text>
            <Text className="c3">
              be used in blends. They tried using the concept of silhouette
              blend{" "}
            </Text>
            <Text className="c5">
              ing in blends such as the middle row of Figure 4 and were pleased
            </Text>
          </View>
          <View className="c180">
            <Text className="c3">
              with the results. The idea of extracting and reapplying details
              was{" "}
            </Text>
            <Text className="c3">
              natural to them, as they had employed analogous features in Photo
              shop (i.e. magic wand) to manipulate details before. However, even{" "}
            </Text>
            <Text className="c5">
              with industry tools, extraction was often tedious. In general,
              both{" "}
            </Text>
            <Text className="c5">
              designers thought that if they worked on the basis of these visual{" "}
            </Text>
            <Text className="c5">
              dimensions, they could recreate any visual blend.
            </Text>
          </View>
          <View className="c103">
            <Text className="c3">
              The artists both note that there were additional techniques they{" "}
            </Text>
            <Text className="c11">
              would use to produce and even higher fdelity blends. One artist
              mentioned the addition or removal of shadows. The other men tioned
              making a background that would complement the blend. However, when
              restricted to these three visual dimensions, they{" "}
            </Text>
            <Text className="c3">
              could produce a second iteration with substantially reduced seams{" "}
            </Text>
            <Text className="c11">
              and enhanced aesthetic quality. If they were producing a pixel{" "}
            </Text>
            <Text className="c5">
              perfect print ad, they would want to do a third iteration.
            </Text>
          </View>
          <View className="c183">
            <Text className="c11">
              As we observed the artists using Photoshop to execute their
              improvements, we noticed two parts of their process that novice{" "}
            </Text>
            <Text className="c3">
              designers would struggle to replicate. First, almost all of the
              toolsthe artists used in Photoshop are not available in the
              typical applications{" "}
            </Text>
            <Text className="c11">
              novices use to quickly edit images. The simple flters, cropping,{" "}
            </Text>
            <Text className="c5">
              and movement aforded by Instagram, presentation software, and{" "}
            </Text>
            <Text className="c5">
              Mac Preview aren’t enough to improve blends. Even simple color{" "}
            </Text>
            <Text className="c5">
              changing operations like "Multiply" are not available in most end{" "}
            </Text>
            <Text className="c5">
              user tools. This is probably because most end-user tools focus on{" "}
            </Text>
            <Text className="c3">
              operations that can be applied to one image at a time. For
              blending,{" "}
            </Text>
            <Text className="c5">
              operations have to apply to two objects. Second, these tools often{" "}
            </Text>
            <Text className="c3">
              require multiple steps and tediouslow-level manipulation.Applying
              the silhouette from one object to another is a process with
              multiple{" "}
            </Text>
            <Text className="c11">
              steps including positioning, object extraction, appropriate layer{" "}
            </Text>
            <Text className="c3">
              composition, and edge cleanup. Extracting details like the snowman{" "}
            </Text>
            <Text className="c11">
              face are tedious, even with the magic wand tool, which largely
              operates based on pixel color similarity. Instead of making users{" "}
            </Text>
            <Text className="c3">
              think in pixels, we want to provide higher-level abstractions,
              such{" "}
            </Text>
            <Text className="c3">
              as the separation of foreground from background or the separation
              of details from a base. To create operations that novices can use,
              we{" "}
            </Text>
            <Text className="c5">
              need to provide tools at a higher-level of abstraction than
              pixels.
            </Text>
          </View>
          <View className="c179">
            <Text className="c5">
              Design Principle 3. Provide novices with high-level tools related
              to the secondary visual dimensions that can preview results
              without requiring expert knowledge or tedious, low level
              manipulation.{" "}
            </Text>
            <Text className="c5">
              In VisiFit, these tools include (1) extracting{" "}
            </Text>
            <Text className="c5">
              and applying silhouettes, (2) blending colors between two objects,{" "}
            </Text>
            <Text className="c3">
              and (3) extracting and replacing internal details from one object
              to{" "}
            </Text>
            <Text className="c5">another. </Text>
          </View>
          <View className="c53">
            <Text className="c2">5 VISIFIT SYSTEM </Text>
          </View>
          <View className="c105">
            <Text className="c11">
              To help novices iteratively improve visual blends, we created a
              system called VisiFit that leverages computational tools to help
              users easily extract and combine visual properties of each image
              into a blend. First the user improves the cropping of each image,
              then improves the three secondary visual dimensions one at a{" "}
            </Text>
            <Text className="c5">
              time. At each step, they are presented with blend options that are{" "}
            </Text>
            <Text className="c11">
              automatically created by the system. However, they are free to{" "}
            </Text>
            <Text className="c3">
              interactively edit them. VisiFit is implemented as a Flask-based
              web{" "}
            </Text>
            <Text className="c5">
              application. It uses Numpy, OpenCV, and Tensorfow [1]. It builds{" "}
            </Text>
            <Text className="c11">
              on the Fabric.js canvas element to implement interactive image{" "}
            </Text>
            <Text className="c5">
              manipulation. Figure 5 shows the fve steps of the interface in the{" "}
            </Text>
            <Text className="c5">order that users see them.</Text>
          </View>
          <View className="c164">
            <Text className="c1">
              VisiFit: Structuring Iterative Improvement for Novice Designers
              CHI ’21, May 8–13, 2021, Yokohama, Japan{" "}
            </Text>
            <Text
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "672.54px",
                height: "367px",
              }}
            >
              <Image
                alt=""
                src="images/image2.png"
                style={{
                  width: "672.54px",
                  height: "367px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </Text>
          </View>
          <View className="c188">
            <Text className="c5">
              Figure 4: Three visual blends improved by graphic designers. For
              each blend, the columns show what two objects were initially
              blended, what the initial blend from VisiBlends produced, what
              secondary dimension(s) the artists improved, and the resulting
              improved blend.
            </Text>
          </View>
          <View className="c77">
            <Text className="c5">Inputs. </Text>
            <Text className="c11">
              VisiFit takes in two inputs that are both outputs from{" "}
            </Text>
            <Text className="c5">VisiBlends: </Text>
          </View>
          <View className="c71">
            <Text className="c5">(1) </Text>
            <Text className="c8">An ordered pair of images </Text>
            <Text className="c3">that have a shape match. We refer </Text>
            <Text className="c11">
              to them as Object A and Object B. In Object A, the shape{" "}
            </Text>
            <Text className="c5">
              covers the entire object. In Object B, the shape covers only the
              main body of the object, leaving out parts of the object{" "}
            </Text>
            <Text className="c3">
              outside the shape. When blending the images, Object A will{" "}
            </Text>
            <Text className="c5">be mapped onto Object B. </Text>
          </View>
          <View className="c216">
            <Text className="c5">(2) </Text>
            <Text className="c42">The positioning parameters </Text>
            <Text className="c11">to align Object A to the shape </Text>
            <Text className="c5">
              in Object B: x-scale factor, y-scale factor, angle of rotation,{" "}
            </Text>
            <Text className="c11">
              and center position. In the prototype of the blend, Object{" "}
            </Text>
            <Text className="c5">
              A is cropped, scaled, and positioned to ft into the shape of{" "}
            </Text>
            <Text className="c5">Object B. </Text>
          </View>
          <View className="c161">
            <Text className="c5">Step 1. Extract main shapes </Text>
            <Text className="c3">
              When the page loads, the system shows Object A and the results of
              automatic cropping. Object A is an image of a single object that
              we want removed from its background.{" "}
            </Text>
            <Text className="c5">
              This is a classic computer vision problem: segmenting the salient{" "}
            </Text>
            <Text className="c5">
              object in an image. Deep learning approaches have been reported{" "}
            </Text>
            <Text className="c5">
              to be a fast and accurate approach to automatic object extraction,{" "}
            </Text>
            <Text className="c5">
              so we use the Tensorfow implementation of a pre-trained model{" "}
            </Text>
            <Text className="c3">
              for deeply supervised salient object detection [
            </Text>
            <Text className="c5">24</Text>
            <Text className="c3">] and use the mask </Text>
            <Text className="c5">it provides to crop the images. </Text>
          </View>
          <View className="c189">
            <Text className="c3">
              The user sees the output for Object A and decides if it is accept{" "}
            </Text>
            <Text className="c11">
              able. If it is, they select it and move to the next step. If not,
              they
            </Text>
          </View>
          <View className="c78">
            <Text className="c5">
              can decide to improve the object using Interactive Grabcut [
            </Text>
            <Text className="c5">47</Text>
            <Text className="c5">], a </Text>
            <Text className="c5">
              traditional computer vision algorithm for foreground extraction.{" "}
            </Text>
            <Text className="c5">
              For Object B, users must use Interactive Grabcut to extract the{" "}
            </Text>
            <Text className="c3">
              main shape from the image. Our provided interface for Interactive{" "}
            </Text>
            <Text className="c11">
              Grabcut has users frst draw a rectangle that encloses the entire{" "}
            </Text>
            <Text className="c5">
              object to extract. Then it produces a foreground extraction shown{" "}
            </Text>
            <Text className="c3">
              to users, who can mark extraneous pieces for removal by drawing{" "}
            </Text>
            <Text className="c5">on the image and running Grabcut again. </Text>
          </View>
          <View className="c158">
            <Text className="c11">
              We used a classic interactive approach rather than a fully au
              tomatic approach because identifying parts or shapes within an{" "}
            </Text>
            <Text className="c3">
              image is very difcult. Traditional automatic approacheslike Hough{" "}
            </Text>
            <Text className="c5">Transforms [</Text>
            <Text className="c5">13</Text>
            <Text className="c5">
              ] do not work well on most images. Deep learning{" "}
            </Text>
            <Text className="c11">
              approaches are fairly good at segmenting objects within images{" "}
            </Text>
            <Text className="c3">[</Text>
            <Text className="c5">20</Text>
            <Text className="c3">
              ] but are not yet capable enough at identifying the internal parts{" "}
            </Text>
            <Text className="c5">of objects. </Text>
          </View>
          <View className="c28">
            <Text className="c5">
              Step 2. Automatically align objects and adjust position.{" "}
            </Text>
            <Text className="c3">Af </Text>
            <Text className="c11">
              ter both objects have had their main shape cropped, the system{" "}
            </Text>
            <Text className="c3">
              automatically produces a new prototype using simple afne trans{" "}
            </Text>
            <Text className="c3">
              formations that move, scale, position, and rotate the objects.
              Users{" "}
            </Text>
            <Text className="c11">
              are free to adjust the alignment with direct manipulation on the{" "}
            </Text>
            <Text className="c5">
              Fabric.js HTML5 canvas, just as they would in any image editing{" "}
            </Text>
            <Text className="c5">application. </Text>
          </View>
          <View className="c237">
            <Text className="c5">Step 3 Select a silhouette option. </Text>
            <Text className="c3">When blending two objects, </Text>
            <Text className="c11">
              the blend can use the silhouette of either Object A or B, because
              they are very close in shape and size. The system automatically
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              CHI ’21, May 8–13, 2021, Yokohama, Japan Chilton, et al.
            </Text>
          </View>
          <View className="c118">
            <Text className="c11">
              top of the other original image, and positions them according to{" "}
            </Text>
            <Text
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "302.65px",
                height: "565.39px",
              }}
            >
              <Image
                alt=""
                src="images/image1.png"
                style={{
                  width: "302.65px",
                  height: "565.39px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </Text>
          </View>
          <View className="c73">
            <Text className="c3">
              the coordinates in Step 2. This efectively creates a mask to
              produce
            </Text>
          </View>
          <View className="c255">
            <Text className="c5">the silhouette of the object. </Text>
          </View>
          <View className="c55">
            <Text className="c5">
              Step 4. Select and adjust color blending options.{" "}
            </Text>
            <Text className="c11">Color is </Text>
          </View>
          <View className="c159">
            <Text className="c3">
              the next dimension to include in the blend. There are 5 options
              for
            </Text>
          </View>
          <View className="c66">
            <Text className="c3">
              color blending. The user can keep the original colors, or use one
              of
            </Text>
          </View>
          <View className="c147">
            <Text className="c5">
              four adjustable tools to blend on the colors of objects:
            </Text>
          </View>
          <View className="c184">
            <Text className="c5">• </Text>
            <Text className="c42">Transparency</Text>
            <Text className="c11">
              . We layer Object A onto Object B with 50%{" "}
            </Text>
          </View>
          <View className="c55">
            <Text className="c11">
              transparency to allow the colors of both objects to come
            </Text>
          </View>
          <View className="c133">
            <Text className="c11">
              through, although somewhat weakly. The user can adjust
            </Text>
          </View>
          <View className="c209">
            <Text className="c5">the transparency level with a slider. </Text>
          </View>
          <View className="c55">
            <Text className="c5">• </Text>
            <Text className="c42">Color Blend</Text>
            <Text className="c11">
              . We use K-means clustering to determine the{" "}
            </Text>
          </View>
          <View className="c19">
            <Text className="c3">
              most common color in the main shape of Object B. We then
            </Text>
          </View>
          <View className="c55">
            <Text className="c5">
              do an additive color blend with the color of Object A. This
            </Text>
          </View>
          <View className="c55">
            <Text className="c11">
              only works well when one object is very light - otherwise
            </Text>
          </View>
          <View className="c99">
            <Text className="c5">the color turns very dark. </Text>
          </View>
          <View className="c37">
            <Text className="c5">• </Text>
            <Text className="c8">Multiply colors</Text>
            <Text className="c3">
              . Multiplying two images is a way to combine{" "}
            </Text>
          </View>
          <View className="c38">
            <Text className="c11">
              colors in a way that preserves characteristics from both.
            </Text>
          </View>
          <View className="c26">
            <Text className="c3">
              Whereas transparency will always balance between the two,
            </Text>
          </View>
          <View className="c278">
            <Text className="c3">
              multiplication blends both of the colors (and their shadings)
            </Text>
          </View>
          <View className="c35">
            <Text className="c3">
              simultaneously. All three examples in Figure 4 use multiply
            </Text>
          </View>
          <View className="c154">
            <Text className="c5">
              to blend colors. For example, in the Lego and ring example,
            </Text>
          </View>
          <View className="c172">
            <Text className="c3">
              multiplying colors allowed the Lego to take on the red color
            </Text>
          </View>
          <View className="c73">
            <Text className="c3">
              and keep the shading of both objects so that the facets of the
            </Text>
          </View>
          <View className="c107">
            <Text className="c5">
              diamond and the bumps on the Lego can both be seen.
            </Text>
          </View>
          <View className="c55">
            <Text className="c5">• </Text>
            <Text className="c32">Replace color</Text>
            <Text className="c5">
              . We use K-means clustering to determine the{" "}
            </Text>
          </View>
          <View className="c253">
            <Text className="c5">
              most common colors in the main shapes of Object A and B.
            </Text>
          </View>
          <View className="c55">
            <Text className="c5">
              We replace Object A’s most common color with Object B’s
            </Text>
          </View>
          <View className="c55">
            <Text className="c11">
              most common color and provide users with an adjustable
            </Text>
          </View>
          <View className="c35">
            <Text className="c3">
              threshold controlling the degree of color replacement. They
            </Text>
          </View>
          <View className="c133">
            <Text className="c11">
              can also choose to blend the image with colors they select
            </Text>
          </View>
          <View className="c202">
            <Text className="c5">
              from an eye dropper tool (not shown in Figure 5).{" "}
            </Text>
          </View>
          <View className="c128">
            <Text className="c5">
              Step 5. Select and re-apply internal details to blend.{" "}
            </Text>
            <Text className="c11">The </Text>
          </View>
          <View className="c172">
            <Text className="c3">
              last visual dimension to include is internal details - these are
              smaller
            </Text>
          </View>
          <View className="c273">
            <Text className="c3">
              objects or salient features that help identify the object. In the{" "}
            </Text>
            <Text className="c8">snow </Text>
          </View>
          <View className="c55">
            <Text className="c42">man </Text>
            <Text className="c11">and </Text>
            <Text className="c42">orange </Text>
            <Text className="c11">
              blend, the snowman is not as iconic without his{" "}
            </Text>
          </View>
          <View className="c102">
            <Text className="c5">
              facial details. Thus, we want to extract them from the original Ob
            </Text>
          </View>
          <View className="c37">
            <Text className="c3">
              ject B and place them back on Object A. Again, we use Interactive
            </Text>
          </View>
          <View className="c17">
            <Text className="c3">
              Grabcut to allow the user to select and refne what details to
              extract.
            </Text>
          </View>
          <View className="c91">
            <Text className="c5">
              Figure 5: The fve steps of the VisiFit pipeline for improving
              blends. In steps 1 and 2, the user extracts the main shape of both
              objects and adjusts their overlap. In steps 3-5, the user blends
              the images. There are two options for selecting a silhouette, fve
              options for color blending (only four are shown), and a tool to
              select and re-apply internal details. Each step builds on the
              selected output from the previous step (indicated by a blue
              border.) Once the user is happy with the blend, they select it as
              the fnal output (indicated in a green border.)
            </Text>
          </View>
          <View className="c44">
            <Text className="c3">
              creates two versions of the blend - one with the silhouette of
              Object{" "}
            </Text>
            <Text className="c11">
              A and one with the silhouette of Object B. The user must select{" "}
            </Text>
            <Text className="c5">which silhouette looks better. </Text>
          </View>
          <View className="c143">
            <Text className="c11">
              To create the two silhouetted prototypes, the system uses the{" "}
            </Text>
            <Text className="c5">
              inverses of the cropped images from Step 1, layers one inverse on
            </Text>
          </View>
          <View className="c243">
            <Text className="c3">
              While we could have used other tools such as context-aware select,{" "}
            </Text>
            <Text className="c5">
              Grabcut worked well on our test set and was a method users had{" "}
            </Text>
            <Text className="c5">
              already become familiar with in earlier stages of the pipeline.
            </Text>
          </View>
          <View className="c153">
            <Text className="c11">
              VisiFit encourages users to follow a linear workfow through{" "}
            </Text>
            <Text className="c3">
              each of the tools. They can see efects previewed on their
              iteration{" "}
            </Text>
            <Text className="c11">
              and choose whether or not to include them. But users are not{" "}
            </Text>
            <Text className="c3">
              constrained to one path through the pipeline; they can take
              multiple{" "}
            </Text>
            <Text className="c11">
              paths and add an unrestricted number of edits to the secondary
              visual dimensions if they so choose. The linear workfow is the
              default because it allows users to start on a simple path through{" "}
            </Text>
            <Text className="c3">
              their structured iteration. At the end, the user selects the blend
              they{" "}
            </Text>
            <Text className="c5">
              are most satisfed with and the system fnishes by showing them{" "}
            </Text>
            <Text className="c5">
              the initial blend and the improved blend side by side.
            </Text>
          </View>
          <View className="c130">
            <Text className="c2">6 EVALUATION </Text>
          </View>
          <View className="c24">
            <Text className="c11">
              To evaluate whether VisiFit helps novice designers substantially
              improve prototypes of visual blends, we conducted a user study
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              VisiFit: Structuring Iterative Improvement for Novice Designers
              CHI ’21, May 8–13, 2021, Yokohama, Japan
            </Text>
          </View>
          <View className="c108">
            <Text className="c3">
              where participants used VisiFit to improve 11 VisiBlends
              prototypes.{" "}
            </Text>
            <Text className="c11">
              Two experts then rated those blends to judge whether they were{" "}
            </Text>
            <Text className="c5">
              substantially improved over the initial prototype.
            </Text>
          </View>
          <View className="c174">
            <Text className="c3">
              To choose the prototypes to improve, we frst listed all the blends{" "}
            </Text>
            <Text className="c3">
              mentioned in VisiBlends and found 15 candidates. Of these, 2 were{" "}
            </Text>
            <Text className="c3">
              already good blends and did not need improvement. Two others had{" "}
            </Text>
            <Text className="c3">
              signifcant similarities to blends used in the analysis and
              formative{" "}
            </Text>
            <Text className="c11">
              studies, having blended upon the same or similar objects. Hence,
              they would not have been fair to use in the evaluation and were{" "}
            </Text>
            <Text className="c5">
              thus excluded. This left an evaluation set of 11 diverse blends
              for{" "}
            </Text>
            <Text className="c5">diferent objects. </Text>
          </View>
          <View className="c125">
            <Text className="c5">
              We recruited 11 novice designers (7 female, average age = 21.5){" "}
            </Text>
            <Text className="c11">
              for a 1-hour long study who were paid $20 for their time. First,
              they were introduced to the concept of visual blends and shown{" "}
            </Text>
            <Text className="c3">
              examples of initial prototypes with their improved versions. Then,{" "}
            </Text>
            <Text className="c3">
              they had two blends to practice using the tools on. During this
              prac{" "}
            </Text>
            <Text className="c5">
              tice session, the experimenter answered questions, demonstrated{" "}
            </Text>
            <Text className="c5">
              features, and gave suggestions on how to use the tool.
            </Text>
          </View>
          <View className="c83">
            <Text className="c3">
              In the next 44 minutes, participants used the segmentation tools{" "}
            </Text>
            <Text className="c3">
              to extract the main objects from all 22 images (System Steps 1 and{" "}
            </Text>
            <Text className="c5">
              2) and blend the pairs into 11 improved blends (System Steps 3, 4,{" "}
            </Text>
            <Text className="c11">
              and 5). They had two minutes for Steps 1 and 2 and another two{" "}
            </Text>
            <Text className="c3">
              minutes for Steps 3, 4 and 5, for a total of 4 minutes to create
              each{" "}
            </Text>
            <Text className="c5">
              blend. All results were saved by the system.{" "}
            </Text>
          </View>
          <View className="c257">
            <Text className="c3">
              After the data was collected, we paid two expert graphic design{" "}
            </Text>
            <Text className="c11">
              ers $60 per hour to look at every iterated blend and answer two{" "}
            </Text>
            <Text className="c5">questions for each of them: </Text>
          </View>
          <View className="c217">
            <Text className="c5">• </Text>
            <Text className="c11">
              Does the iterated blend present substantial improvement{" "}
            </Text>
            <Text className="c5">over the prototype? </Text>
          </View>
          <View className="c122">
            <Text className="c5">• </Text>
            <Text className="c11">
              Is the iterated blend of sufcient quality to post on social{" "}
            </Text>
            <Text className="c5">media? </Text>
          </View>
          <View className="c70">
            <Text className="c5">
              The most important question to answer was the frst one: does{" "}
            </Text>
            <Text className="c11">
              the tool help with substantial improvements? Small faws in the{" "}
            </Text>
            <Text className="c5">
              execution were allowed, but the objects had to be seamlessly and{" "}
            </Text>
            <Text className="c11">
              aesthetically blended to count as an improvement. Our second{" "}
            </Text>
            <Text className="c3">
              question was how often these iterated blends were good enough for{" "}
            </Text>
            <Text className="c11">
              social media publication (i.e. a student club announcement post).{" "}
            </Text>
            <Text className="c3">
              Publication would mean that both objects were clearly identifable{" "}
            </Text>
            <Text className="c5">and blended with no pronounced faws. </Text>
          </View>
          <View className="c51">
            <Text className="c3">
              Social media is much more forgiving than print publication. Print{" "}
            </Text>
            <Text className="c3">
              publications must be pixel-perfect, well-lit, and high defnition.
              To{" "}
            </Text>
            <Text className="c3">
              meet this bar, a graphic designer should still use a professional
              tool{" "}
            </Text>
            <Text className="c11">
              like Photoshop. However, on social media, the images are often
              smaller, lower resolution, published more frequently, and for a
              smaller audience (such as student clubs, classes or majors) - so{" "}
            </Text>
            <Text className="c3">
              perfection is not as important. Additionally, the prevalence of
              low{" "}
            </Text>
            <Text className="c11">
              fdelity user-generated content like memes and self-shot videos
              lowers the expectation of precision on social media, placing the{" "}
            </Text>
            <Text className="c5">emphasis on the message. </Text>
          </View>
          <View className="c270">
            <Text className="c2">6.1 Results </Text>
          </View>
          <View className="c23">
            <Text className="c3">
              During the study, the 11 participants attempted to improve a total
              of 121 blends. Six data points were lost due to errors in the
              saving pro cess, leaving 115 blends as data points. The judges
              were introduced to their task with examples of prototypes and
              their VisiFit-improved counterparts, like the pairsseen in Figure
              4 (which were done by the
            </Text>
          </View>
          <View className="c181">
            <Text className="c5">
              authors with graphic design background). For calibration, judges{" "}
            </Text>
            <Text className="c11">
              were shown blends of varying quality, to demonstrate what was
              considered "substantial improvement" and what was considered{" "}
            </Text>
            <Text className="c5">
              "suitable for publication on social media".
            </Text>
          </View>
          <View className="c165">
            <Text className="c11">
              After studying the blends resulting from each participant, the{" "}
            </Text>
            <Text className="c3">
              judges answered our two questions for all VisiFit-improved blends.{" "}
            </Text>
            <Text className="c5">
              Both questions on "improvement" and "suitability for publication"{" "}
            </Text>
            <Text className="c3">
              were highly subjective; however, the raters had “fair agreement”
              on both questions. They agreed on “substantial improvement” 71.3%
              of{" "}
            </Text>
            <Text className="c5">the time (</Text>
            <Text className="c32">κ </Text>
            <Text className="c5">
              = .23) and agreed on “suitability for publication” 73.9%{" "}
            </Text>
            <Text className="c3">of the time (</Text>
            <Text className="c32">κ </Text>
            <Text className="c3">
              = .37). In particular, there was one blend which they{" "}
            </Text>
            <Text className="c11">
              disagreed on every time. Both raters had well-reasoned answers for
              their diferences and rather than forcing them to agree or in{" "}
            </Text>
            <Text className="c5">
              troducing another rater, we split the diference and looked at the{" "}
            </Text>
            <Text className="c3">
              overall average rates of "substantial improvement" and
              "suitability{" "}
            </Text>
            <Text className="c5">
              for publication" to report the success of the tool.
            </Text>
          </View>
          <View className="c57">
            <Text className="c5">
              Overall, people using the tool made substantial improvements{" "}
            </Text>
            <Text className="c5">
              to the blend 76.1% of the time. Additionally, those blends were of{" "}
            </Text>
            <Text className="c5">
              publishable quality 70.4% of the time. These metrics demonstrate{" "}
            </Text>
            <Text className="c3">
              how VisiFit enables novicesto quickly and easily complete a
              difcult{" "}
            </Text>
            <Text className="c5">iteration task. </Text>
          </View>
          <View className="c88">
            <Text className="c5">
              Judges reported that blends were substantially improved when{" "}
            </Text>
            <Text className="c11">
              the parts of the objects looked correctly layered. This efect was{" "}
            </Text>
            <Text className="c3">
              achieved in a number of ways through VisiFit: when the silhouette{" "}
            </Text>
            <Text className="c3">
              tool was used to mask one object and produce clean borders, when{" "}
            </Text>
            <Text className="c3">
              the internal detail extraction tool foregrounded important parts
              of{" "}
            </Text>
            <Text className="c3">
              the bottom image, (i.e. the acorn hat detail in the
              Guggenheim-acorn{" "}
            </Text>
            <Text className="c11">
              blend of Figure 1), or when the colors were blended compositely{" "}
            </Text>
            <Text className="c5">
              (i.e. the corn and McDonald’s blend in Figure 6.)
            </Text>
          </View>
          <View className="c248">
            <Text className="c3">
              For 10 of the 11 images, it was possible for at least one of the
              11{" "}
            </Text>
            <Text className="c3">
              participants to create an improved and publishable blend. There
              are{" "}
            </Text>
            <Text className="c5">
              several possible reasons why there was variability in user perfor{" "}
            </Text>
            <Text className="c3">
              mance. One was subjectivity; some novice users were able to create{" "}
            </Text>
            <Text className="c3">
              high quality blends but chose versions that the judges did not
              rate{" "}
            </Text>
            <Text className="c3">
              as improvements. Judging one’s own work is hard, because creators{" "}
            </Text>
            <Text className="c5">
              grow attached to their work and struggle to see it objectively.
            </Text>
          </View>
          <View className="c160">
            <Text className="c5">
              A second and more important reason is the limitation of some{" "}
            </Text>
            <Text className="c3">
              of the tools. Cropping entire objects, applying a silhouette, and
              all{" "}
            </Text>
            <Text className="c11">
              four methods of blending colors worked as expected every time.{" "}
            </Text>
            <Text className="c5">
              However, the Interactive Grabcut tools for extracting parts of ob{" "}
            </Text>
            <Text className="c3">
              jects was sometimes problematic, since some details were too small{" "}
            </Text>
            <Text className="c11">
              to extract properly. While Grabcut is fast and easy, it does not
              have pixel-level precision. It often helped to improve the blend,
              but it sometimes weakened their suitability for publication. The{" "}
            </Text>
            <Text className="c3">
              VisiFit-improved blend could still be used as a guide when
              creating{" "}
            </Text>
            <Text className="c11">
              a pixel-perfect version in a professional image editing tool. For
              example, for the blend of the orange slice and the barbeque grill
              featured in Figure 1, the idea of the blend is clear and improved,
              but the execution had enough faws for it to be not suitable for{" "}
            </Text>
            <Text className="c5">publication. </Text>
          </View>
          <View className="c258">
            <Text className="c3">
              There was one prototype that no user was able to improve. The{" "}
            </Text>
            <Text className="c3">
              burger and light bulb blend (Figure 6) left a seam between the
              burger{" "}
            </Text>
            <Text className="c3">
              and the light bulb every time. This example points out a
              limitation{" "}
            </Text>
            <Text className="c3">
              of VisiFit that we could fx this by implementing a fll tool to
              reduce{" "}
            </Text>
            <Text className="c5">the appearance of seams. </Text>
          </View>
          <View className="c113">
            <Text className="c11">
              Overall, given the speed of the tool, participants thought that{" "}
            </Text>
            <Text className="c5">
              the results were well worth the efort they put into it [
            </Text>
            <Text className="c5">8</Text>
            <Text className="c5">]. During</Text>
          </View>
          <View className="c106">
            <Text className="c1">
              CHI ’21, May 8–13, 2021, Yokohama, Japan Chilton, et al.
            </Text>
          </View>
          <View className="c220">
            <Text className="c3">
              the study, several participants mentioned that the tool was fast
              and{" "}
            </Text>
            <Text className="c5">
              produced results they would not otherwise know how to achieve.
            </Text>
          </View>
          <View className="c194">
            <Text className="c2">7 DISCUSSION </Text>
          </View>
          <View className="c212">
            <Text className="c3">
              The two main contributions of this paper are 1) the method of
              using{" "}
            </Text>
            <Text className="c11">
              secondary design dimensions to structure the iterative improve{" "}
            </Text>
            <Text className="c3">
              ment process and 2) the VisiFit system that helps novices improve{" "}
            </Text>
            <Text className="c3">
              blends with a pipeline of computational tools. In this discussion
              we want to explore how the computational tools could generalize to
              the{" "}
            </Text>
            <Text className="c5">
              needs of expert designers and how secondary design dimensions{" "}
            </Text>
            <Text className="c5">
              can be applied to domains beyond visual blends. Additionally, we{" "}
            </Text>
            <Text className="c3">
              discuss the intellectual and engineering challenges that come with{" "}
            </Text>
            <Text className="c5">applying these ideas to new domains. </Text>
          </View>
          <View className="c146">
            <Text className="c2">
              7.1 Professional designers’ impressions of VisiFit
            </Text>
          </View>
          <View className="c276">
            <Text className="c5">
              Although VisiFit is meant to help novices, we co-designed it with{" "}
            </Text>
            <Text className="c11">
              2 graphic artists who were eager to use it as a rapid prototyping{" "}
            </Text>
            <Text className="c3">
              tool despite their prior domain knowledge. Thus, we wanted to see{" "}
            </Text>
            <Text className="c5">
              what impressions experts would have on the system and showed{" "}
            </Text>
            <Text className="c5">
              the tool to two professional designers (D1 and D2). D1 is a media{" "}
            </Text>
            <Text className="c3">
              communications director at a medium-sized organization with over
              twenty years of experience. D2 is a freelance graphic designer
              with{" "}
            </Text>
            <Text className="c11">
              over 10 years of experience. Both expressed a need to efciently
              create novel and eye-catching visuals for social media that are{" "}
            </Text>
            <Text className="c3">
              beyond the quality produced by tools such as Canva. Both designers{" "}
            </Text>
            <Text className="c11">
              had used visual blends in their professional work before, but did{" "}
            </Text>
            <Text className="c3">
              not know the name for the concept and did not have a strategy for{" "}
            </Text>
            <Text className="c5">producing them. </Text>
          </View>
          <View className="c254 c275">
            <Text className="c3">
              We presented them with the same blend examples from the user{" "}
            </Text>
            <Text className="c11">
              study and asked them to perform the same task: use the tool to{" "}
            </Text>
            <Text className="c5">
              iterate on the blend prototypes and create seamless and aesthetic{" "}
            </Text>
            <Text className="c5">
              blends. Both were impressed by how quickly and easily the blend{" "}
            </Text>
            <Text className="c11">
              ing tools helped them explore the design space. All of the basic{" "}
            </Text>
            <Text className="c3">
              operations were familiar to them from their experience with Photo
              shop, but they expressed surprise and relief to see results
              generated{" "}
            </Text>
            <Text className="c11">so quickly. D2 said </Text>
            <Text className="c42">
              “Sometimes I spend hours pixel pushing just to test an idea. I
              love being able to test an idea quickly.”
            </Text>
            <Text className="c11">. D1 likened </Text>
            <Text className="c5">
              it to flter previews on Instagram which she loves to use to make{" "}
            </Text>
            <Text className="c3">
              photos more interesting on social media. Even for professional de{" "}
            </Text>
            <Text className="c3">
              signers who are adept at using pixel-perfect tools, there is a
              need to{" "}
            </Text>
            <Text className="c3">
              provide high-level tools that can preview results without
              low-level{" "}
            </Text>
            <Text className="c5">manipulation (Design Principle 3). </Text>
          </View>
          <View className="c84">
            <Text className="c3">
              When using VisiFit, both made blend improvements in a manner{" "}
            </Text>
            <Text className="c11">
              diferent from novice designers. D1 especially liked to push the{" "}
            </Text>
            <Text className="c3">
              boundaries, to try extracting and blending the less obvious
              options{" "}
            </Text>
            <Text className="c3">
              within the secondary design dimensions. D1 almost always started{" "}
            </Text>
            <Text className="c11">
              by looking at the inputs and formulating a plan. However, as D1{" "}
            </Text>
            <Text className="c5">
              proceeded through the workfow, she found better and more sur{" "}
            </Text>
            <Text className="c3">
              prising ideas from the fare and focus nature of VisiFit. The
              system{" "}
            </Text>
            <Text className="c3">
              helped D1 explore the design space while keeping multiple threads{" "}
            </Text>
            <Text className="c5">
              open at a time. From this interaction, we believe that structuring{" "}
            </Text>
            <Text className="c5">
              blend improvement around secondary dimensions has value even{" "}
            </Text>
            <Text className="c5">
              for professional designers (Design Principle 2).{" "}
            </Text>
          </View>
          <View className="c225">
            <Text className="c5">
              D2 was impressed by the way the computational tools worked{" "}
            </Text>
            <Text className="c3">
              and particularly so for object extraction. He found Interactive
              Grab{" "}
            </Text>
            <Text className="c11">
              cut impressive in how efective it was on shape extraction but{" "}
            </Text>
            <Text className="c3">
              unimpressive in how unsuccessful it could be when selecting inter{" "}
            </Text>
            <Text className="c3">
              nal details. After multiple attempts with the tool, he noted that
              he{" "}
            </Text>
            <Text className="c3">
              would have preferred either better precision during user
              interaction or a better automatic approach. This raised an
              important limitation - VisiFit only provided one tool to extract
              internal details. Having a{" "}
            </Text>
            <Text className="c5">
              back-up tool (such as shaped-based cropping) could have relieved{" "}
            </Text>
            <Text className="c3">
              user frustration. This reinforces Design Principle 1 - that
              automatic{" "}
            </Text>
            <Text className="c11">
              tools don’t always achieve desired results - and stresses that the
              system must provide{" "}
            </Text>
            <Text className="c42">multiple </Text>
            <Text className="c11">interactive tools specifc for each </Text>
            <Text className="c5">
              subtask so that users have control over the creative process.
            </Text>
          </View>
          <View className="c207">
            <Text className="c3">
              Overall, we believe that computational design toolsforstructured{" "}
            </Text>
            <Text className="c11">
              iteration can be as useful to professional designers as they are
              to novices. Both groups need to explore design spaces quickly and
              easily. Although experts have the ability to do this with existing{" "}
            </Text>
            <Text className="c3">
              tools, a pipeline of computational design tools could make this
              more{" "}
            </Text>
            <Text className="c5">
              efcient and attainable for designers of all experience levels.
            </Text>
          </View>
          <View className="c138">
            <Text className="c2">
              7.2 Generalization to other blending problems{" "}
            </Text>
            <Text className="c3">
              While the VisiFit system is tailored to the domain of visual
              blends,{" "}
            </Text>
            <Text className="c11">
              we believe the method of editing secondary design dimensions{" "}
            </Text>
            <Text className="c3">
              can be used to help novices structure the improvement process for
              other blending domains. We discuss three domains that it could be{" "}
            </Text>
            <Text className="c3">
              generalized to: animated visual blends, fashion design, and
              furniture{" "}
            </Text>
            <Text className="c5">design. </Text>
          </View>
          <View className="c40">
            <Text className="c8">7.2.1 Animated Visual Blends. </Text>
            <Text className="c3">One way to further enhance visual </Text>
            <Text className="c3">
              blends is to add motion to them. Although it would be easy to add{" "}
            </Text>
            <Text className="c3">
              arbitrary motion, it would be ideal if the motion complemented the
              message. The top panel of Figure 7 shows a visual blend for{" "}
            </Text>
            <Text className="c8">condom </Text>
            <Text className="c3">and </Text>
            <Text className="c8">action </Text>
            <Text className="c3">
              that implies the message “condoms are for action.” (The{" "}
            </Text>
            <Text className="c5">clapperboard is a symbol of </Text>
            <Text className="c32">action</Text>
            <Text className="c5">.) This blend is already efective </Text>
            <Text className="c5">
              at conveying the message, but to enhance it we could add motion{" "}
            </Text>
            <Text className="c3">
              from the clapperboard onto the condom wrapper. We call this type{" "}
            </Text>
            <Text className="c5">of motion graphic an </Text>
            <Text className="c32">animated blend</Text>
            <Text className="c5">. </Text>
          </View>
          <View className="c177">
            <Text className="c11">
              We propose that animated blends can be created by using sec{" "}
            </Text>
            <Text className="c3">
              ondary dimensions of motion to iterate on static blends. To start,
              we need a reference video thatshowstypical motion made by one of
              the{" "}
            </Text>
            <Text className="c3">
              objects in the blend. To structure the iteration, we can extract
              and{" "}
            </Text>
            <Text className="c3">
              transfer dimensions of motion from this reference video. The impor
              tant secondary design dimensions of motion include: the pattern of
              motion (circular motion, path segments, appearance/disappearance,{" "}
            </Text>
            <Text className="c5">
              expansion/contraction, or gradient changes), the speed of motion,{" "}
            </Text>
            <Text className="c3">
              acceleration, and timing of the motion. All or some of these dimen{" "}
            </Text>
            <Text className="c5">
              sions of motion can be applied to create a seamless and aesthetic{" "}
            </Text>
            <Text className="c5">animated blend. </Text>
          </View>
          <View className="c21">
            <Text className="c11">
              Figure 7 shows three animated blends. For each one, it shows{" "}
            </Text>
            <Text className="c11">
              the static visual blend, the reference video of one or both
              objects{" "}
            </Text>
            <Text className="c5">
              in motion, and how these secondary dimensions of motion can be{" "}
            </Text>
            <Text className="c3">added to the visual blend. For the </Text>
            <Text className="c8">condom </Text>
            <Text className="c3">and </Text>
            <Text className="c8">action </Text>
            <Text className="c3">
              animation, the pattern of motion of the clapperboard (up-and-down
              path segments){" "}
            </Text>
            <Text className="c3">
              can be added to the blend to reinforce the message of “action”.
              For{" "}
            </Text>
            <Text className="c3">the </Text>
            <Text className="c8">astronaut </Text>
            <Text className="c3">and </Text>
            <Text className="c8">food </Text>
            <Text className="c3">
              animation, the speed and arc of motion that{" "}
            </Text>
            <Text className="c11">
              the real astronaut travels with can be applied to the static egg{" "}
            </Text>
            <Text className="c5">astronaut blend. For the </Text>
            <Text className="c32">tea </Text>
            <Text className="c5">and </Text>
            <Text className="c32">sunrise </Text>
            <Text className="c5">animation, two reference</Text>
          </View>
          <View className="c229">
            <Text className="c1">
              VisiFit: Structuring Iterative Improvement for Novice Designers
              CHI ’21, May 8–13, 2021, Yokohama, Japan{" "}
            </Text>
            <Text
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "672.56px",
                height: "338.1px",
              }}
            >
              <Image
                alt=""
                src="images/image4.png"
                style={{
                  width: "672.56px",
                  height: "338.1px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </Text>
          </View>
          <View className="c14">
            <Text className="c5">
              Figure 6: Examples of initial and improved prototypes from the
              VisiFit user study. The frst column shows three blends that were
              deemed “improved and publishable”. The second column shows three
              blends that were deemed “improved but not pub lishable”. The third
              column shows two blends that were deemed “not improved and not
              publishable”.
            </Text>
          </View>
          <View className="c197">
            <Text className="c5">
              videos can be applied to the blend. First, the pattern of motion
              of{" "}
            </Text>
            <Text className="c3">
              the tea bag (up-and-down path segments) can be applied to the sun.{" "}
            </Text>
            <Text className="c3">
              Second, the pattern of motion of the sunrise (gradient change) can{" "}
            </Text>
            <Text className="c11">
              be applied to the sky. Although transferring one type of motion{" "}
            </Text>
            <Text className="c5">
              would be sufcient, adding two types of motion further enhances{" "}
            </Text>
            <Text className="c5">
              the visual appeal and meaning of the blend.{" "}
            </Text>
          </View>
          <View className="c123">
            <Text className="c11">
              Computational tools would be needed to extract and reapply the
              aforementioned dimensions of motion. Parameters for each dimension
              would become points of interactions for users. These{" "}
            </Text>
            <Text className="c3">
              tools could then be chained togetherinto a pipeline similarto
              VisiFit{" "}
            </Text>
            <Text className="c5">
              to structure the iterative improvement of animated blends.
            </Text>
          </View>
          <View className="c214">
            <Text className="c42">7.2.2 Fashion and Furniture Design. </Text>
            <Text className="c11">In furniture and fashion de </Text>
            <Text className="c5">
              sign, one type of problem is to combine diferent styles to achieve{" "}
            </Text>
            <Text className="c3">
              a new purpose. One way to do this is arguably a type of blending -{" "}
            </Text>
            <Text className="c3">
              to borrow from the functional and stylistic elements of both
              styles{" "}
            </Text>
            <Text className="c3">
              to create a new hybrid style. Two examples of hybrid styles
              include{" "}
            </Text>
            <Text className="c5">
              athleisure clothing and “updated classics” in furniture design.
            </Text>
          </View>
          <View className="c250">
            <Text className="c5">• </Text>
            <Text className="c3">
              Athleisure is a clothing style that takes the fabrics and styles
              of athletic clothing and adapts them to non-athletic environ{" "}
            </Text>
            <Text className="c11">
              ments such as work, school, or other social environments{" "}
            </Text>
            <Text className="c5">[23, 48]. </Text>
          </View>
          <View className="c265">
            <Text className="c5">• </Text>
            <Text className="c3">
              Updated classics is a style of furniture design that takes the{" "}
            </Text>
            <Text className="c11">
              rich feel of classic furniture and adapts it to modern and{" "}
            </Text>
            <Text className="c5">
              utility-driven needs of the 21st century.{" "}
            </Text>
          </View>
          <View className="c228">
            <Text className="c3">
              We propose that creating items within these hybrid styles could{" "}
            </Text>
            <Text className="c11">
              be structured using secondary design dimensions. Once the user
            </Text>
          </View>
          <View className="c111">
            <Text className="c11">
              identifed which two objects to blend, a tool would help users{" "}
            </Text>
            <Text className="c5">
              determine what secondary dimensions to extract and apply from{" "}
            </Text>
            <Text className="c5">
              each object. For example, a fashion designer could operate on the{" "}
            </Text>
            <Text className="c11">
              dimensions of material, silhouette (neckline, hemline, leg width,
              etc.), color/pattern, fabrication (seam placement, grain
              direction,{" "}
            </Text>
            <Text className="c5">
              etc.), and details (closures, stitching, etc.) When combining
              these{" "}
            </Text>
            <Text className="c11">
              dimensions to create a hybrid style such as athleisure, designers{" "}
            </Text>
            <Text className="c5">
              often use the stretchy material of athletic clothing, the details
              and{" "}
            </Text>
            <Text className="c3">
              colors of street clothing, and a mix of silhouettes found in the
              gym,{" "}
            </Text>
            <Text className="c11">
              street, or workplace. This combination of traits helps designers{" "}
            </Text>
            <Text className="c3">
              achieve both comfort and socially appropriate styles. A similar
              set{" "}
            </Text>
            <Text className="c3">
              of dimensions could be used for furniture design to achieve a
              blend{" "}
            </Text>
            <Text className="c11">
              of classic sophistication with modern convenience. For example,{" "}
            </Text>
            <Text className="c3">
              an updated classic chair could use the classic shape of a Louis
              XIV{" "}
            </Text>
            <Text className="c3">
              chair, but fabricate it out of plastic (as is common in modern
              chairs){" "}
            </Text>
            <Text className="c11">
              to make it easier to move and clean. It could also reduce some of{" "}
            </Text>
            <Text className="c3">
              the ornamentation on the silhouette to take on aspects of a
              minimal{" "}
            </Text>
            <Text className="c5">modern look. </Text>
          </View>
          <View className="c259">
            <Text className="c3">
              We believe this blending process can also be structured by chain{" "}
            </Text>
            <Text className="c3">
              ing together computational tools for each of the secondary design{" "}
            </Text>
            <Text className="c3">
              dimensions. This process should be interactive, using human judg{" "}
            </Text>
            <Text className="c5">
              ment not only to guide the search, but also to constantly consider{" "}
            </Text>
            <Text className="c5">
              aspects outside the dimensions such as the social acceptability of{" "}
            </Text>
            <Text className="c11">
              the design, the appeal to the target market, and whether its con{" "}
            </Text>
            <Text className="c5">
              struction is feasible within desired price points.
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              CHI ’21, May 8–13, 2021, Yokohama, Japan Chilton, et al.
            </Text>
          </View>
          <View className="c262">
            <Text className="c5">
              especially with limited data. This is an open challenge: to
              quickly{" "}
            </Text>
            <Text
              style={{
                overflow: "hidden",
                display: "inline-block",
                margin: "0px 0px",
                border: "0px solid #000000",
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)",
                width: "336.28px",
                height: "482.96px",
              }}
            >
              <Image
                alt=""
                src="images/image3.png"
                style={{
                  width: "336.28px",
                  height: "482.96px",
                  marginLeft: "0px",
                  marginTop: "0px",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                }}
                title
              />
            </Text>
          </View>
          <View className="c17">
            <Text className="c3">
              create new computational tools for the dimensions of new domains.
            </Text>
          </View>
          <View className="c19">
            <Text className="c5">
              For any new blending domain, there is also the possibility that
            </Text>
          </View>
          <View className="c115">
            <Text className="c11">
              some blends are too complex to be structured around secondary
            </Text>
          </View>
          <View className="c159">
            <Text className="c5">
              dimensions due to complex interactions between dimensions. For
            </Text>
          </View>
          <View className="c69">
            <Text className="c11">
              example, when the DNA of two parents are combined to make a
            </Text>
          </View>
          <View className="c26">
            <Text className="c3">
              ofspring, the ofspring certainly has a blend of the parents
              features,
            </Text>
          </View>
          <View className="c37">
            <Text className="c5">
              but there are so many features that the combinations become too
            </Text>
          </View>
          <View className="c55">
            <Text className="c11">
              complex to choose from. There may be too many dependencies
            </Text>
          </View>
          <View className="c17">
            <Text className="c3">
              between dimensions that make designing at a high level impossible.
            </Text>
          </View>
          <View className="c69">
            <Text className="c11">
              When considering the dimensions of a new domain, one should
            </Text>
          </View>
          <View className="c215">
            <Text className="c5">look out for such dependencies. </Text>
          </View>
          <View className="c43">
            <Text className="c2">8 CONCLUSION </Text>
          </View>
          <View className="c272">
            <Text className="c3">
              Iterative improvement is the essence of the iterative design
              process.
            </Text>
          </View>
          <View className="c37">
            <Text className="c5">
              Although there are many existing tools that support other phases
            </Text>
          </View>
          <View className="c238">
            <Text className="c3">
              of the design process (brainstorming, prototyping, evaluation, and
            </Text>
          </View>
          <View className="c60">
            <Text className="c3">
              fnal design execution) there are a lack of tools focusing on
              iteration
            </Text>
          </View>
          <View className="c133">
            <Text className="c11">[</Text>
            <Text className="c5">17</Text>
            <Text className="c11">
              ]. We present a tool that helps novices iteratively improve on
            </Text>
          </View>
          <View className="c18">
            <Text className="c3">
              prototypes of visual blends. Visual blends are an advanced graphic
            </Text>
          </View>
          <View className="c73">
            <Text className="c3">
              design technique to combine two visual symbols into one object to
            </Text>
          </View>
          <View className="c73">
            <Text className="c3">
              convey a message symbolically. Tools already exist to help novices
            </Text>
          </View>
          <View className="c19">
            <Text className="c3">
              create initial prototypes of visual blends. However, novices do
              not
            </Text>
          </View>
          <View className="c60">
            <Text className="c3">
              have tools or strategies to support them through the next
              iteration
            </Text>
          </View>
          <View className="c63">
            <Text className="c5">
              that would take the blend from lower to higher fdelity.
            </Text>
          </View>
          <View className="c92">
            <Text className="c11">
              We conducted three preliminary investigations on how to it
            </Text>
          </View>
          <View className="c15">
            <Text className="c11">
              eratively improve visual blends. This included an exploration of
            </Text>
          </View>
          <View className="c102">
            <Text className="c5">
              automatic tools, analysis of expert examples, and a co-design pro
            </Text>
          </View>
          <View className="c55">
            <Text className="c5">
              cess with graphic designers. From these studies we derived three
            </Text>
          </View>
          <View className="c19">
            <Text className="c3">
              design principles that can be employed in the creation of
              iteration
            </Text>
          </View>
          <View className="c172">
            <Text className="c3">
              tools. Additionally, we introduce a method of using{" "}
            </Text>
            <Text className="c8">secondary design </Text>
          </View>
          <View className="c69">
            <Text className="c42">dimension </Text>
            <Text className="c11">
              to structure the iterative improvement process. Based
            </Text>
          </View>
          <View className="c55">
            <Text className="c11">
              on this method, we can create computational tools to help users
            </Text>
          </View>
          <View className="c52">
            <Text className="c5">
              Figure 7: Three examples of visual blends that could be turned
              into animated blends. Each row shows the original visual blend on
              the left, the reference video in the middle, and the animated
              blend on the right. Motion is annotated in red.
            </Text>
          </View>
          <View className="c93">
            <Text className="c2">7.3 Limitations </Text>
          </View>
          <View className="c185">
            <Text className="c3">
              The major intellectual challenge of applying these techniquesto
              any{" "}
            </Text>
            <Text className="c5">
              new domain is discovering what its secondary design dimensions{" "}
            </Text>
            <Text className="c11">
              are. For VisiFit, we were able to observe the dimensions from ex{" "}
            </Text>
            <Text className="c3">
              amples and from co-design sessions. Additionally, we were guided{" "}
            </Text>
            <Text className="c5">
              by what is known about the neuroscience of human visual object{" "}
            </Text>
            <Text className="c3">
              recognition. If one or more of those approaches is not available
              in a{" "}
            </Text>
            <Text className="c3">
              new domain, signifcant trial and error may be required to identify{" "}
            </Text>
            <Text className="c3">
              those dimensions. An exciting challenge would be to use computa{" "}
            </Text>
            <Text className="c5">
              tional tools to automatically (or semi-automatically) discover the{" "}
            </Text>
            <Text className="c5">
              secondary design dimensions of a new domain.{" "}
            </Text>
          </View>
          <View className="c7">
            <Text className="c3">
              The major engineering challenge of applying these design prin{" "}
            </Text>
            <Text className="c3">
              ciples to a new domain is to build computational tools that can
              help{" "}
            </Text>
            <Text className="c3">
              explore each dimension with high-level tools rather than low-level{" "}
            </Text>
            <Text className="c3">
              manipulation. Deep learning has provided new hope for such tools,
              but there are still limitations to what deep learning systems can
              do,
            </Text>
          </View>
          <View className="c156">
            <Text className="c3">
              explore the design space during iteration. For visual blends, the
              sec ondary design dimensions are color, silhouette, and internal
              details.{" "}
            </Text>
            <Text className="c3">
              The computational tools we implemented to explore each of these{" "}
            </Text>
            <Text className="c5">
              dimensions used a combination of deep learning, computer vision
              techniques, and parametric control for fne-tuning. The principles{" "}
            </Text>
            <Text className="c11">
              are demonstrated in our system VisiFit – a pipeline of computa
              tional design tools to iterate on prototypes of visual blends. Our
              evaluation shows that when using VisiFit, novices substantially
              improve blends 76% of the time. Their blends were of sufcient{" "}
            </Text>
            <Text className="c5">
              quality for publication on social media 70% of the time.
            </Text>
          </View>
          <View className="c116">
            <Text className="c3">
              Although creating visual blends is a domain-specifc problem, it{" "}
            </Text>
            <Text className="c3">
              is emblematic of many design challenges which involve the blend{" "}
            </Text>
            <Text className="c11">
              ing or remixing of existing things to produce novel meaning or
              purpose. We discuss how these principles could be reapplied in
              three other blending domains: animated blends, hybrid fashion{" "}
            </Text>
            <Text className="c3">
              design, and hybrid furniture design. These domains have their own{" "}
            </Text>
            <Text className="c3">
              secondary dimensions which can be used to structure the iterative{" "}
            </Text>
            <Text className="c5">improvement process. </Text>
          </View>
          <View className="c49">
            <Text className="c2">REFERENCES </Text>
          </View>
          <View className="c31">
            <Text className="c1">[1] </Text>
            <Text className="c1">
              Martín Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng
              Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jefrey Dean,
              Matthieu Devin, San jay Ghemawat, Ian Goodfellow, Andrew Harp,
              Geofrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz,
              Lukasz Kaiser, Manjunath Kudlur, Josh Leven{" "}
            </Text>
            <Text className="c1">
              berg, Dan Mané, Rajat Monga, Sherry Moore, Derek Murray, Chris
              Olah, Mike
            </Text>
          </View>
          <View className="c106">
            <Text className="c1">
              VisiFit: Structuring Iterative Improvement for Novice Designers
              CHI ’21, May 8–13, 2021, Yokohama, Japan
            </Text>
          </View>
          <View className="c191">
            <Text className="c1">
              Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal
              Talwar, Paul{" "}
            </Text>
            <Text className="c1">
              Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Viégas, Oriol
              Vinyals,{" "}
            </Text>
            <Text className="c13">
              Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, and
              Xiaoqiang Zheng.{" "}
            </Text>
            <Text className="c1">
              2015. TensorFlow: Large-Scale Machine Learning on Heterogeneous
              Systems.{" "}
            </Text>
            <Text className="c1">
              http://tensorfow.org/ Software available from tensorfow.org.
            </Text>
          </View>
          <View className="c166">
            <Text className="c1">[2] </Text>
            <Text className="c13">
              Maneesh Agrawala, Wilmot Li, and Floraine Berthouzoz. 2011. Design
              Principles{" "}
            </Text>
            <Text className="c1">for Visual Communication. </Text>
            <Text className="c0">Commun. ACM </Text>
            <Text className="c1">54, 4 (April 2011), 60–69. https: </Text>
            <Text className="c1">//doi.org/10.1145/1924421.1924439 </Text>
          </View>
          <View className="c121">
            <Text className="c1">[3] </Text>
            <Text className="c13">Pete Barry. 2016. </Text>
            <Text className="c4">
              The Advertising Concept Book: Think Now, Design Later (Third)
            </Text>
            <Text className="c13">. </Text>
            <Text className="c1">
              Thames &amp; Hudson, London, UK. 296 pages.{" "}
            </Text>
          </View>
          <View className="c267">
            <Text className="c1">[4] </Text>
            <Text className="c1">
              Gilbert Louis Bernstein and Wilmot Li. 2015. Lillicon: Using
              Transient Widgets{" "}
            </Text>
            <Text className="c1">to Create Scale Variations of Icons. </Text>
            <Text className="c0">ACM Trans. Graph. </Text>
            <Text className="c1">34, 4, Article 144 (July </Text>
            <Text className="c1">
              2015), 11 pages. https://doi.org/10.1145/2766980{" "}
            </Text>
          </View>
          <View className="c117">
            <Text className="c1">[5] </Text>
            <Text className="c13">
              Dino Borri and Domenico Camarda. 2009. The Cooperative
              Conceptualization of{" "}
            </Text>
            <Text className="c1">
              Urban Spaces in AI-assisted Environmental Planning. In{" "}
            </Text>
            <Text className="c0">Proceedings of the 6th </Text>
            <Text className="c0">
              International Conference on Cooperative Design, Visualization, and
              Engineering{" "}
            </Text>
            <Text className="c13">(Luxembourg, Luxembourg) </Text>
            <Text className="c4">(CDVE’09)</Text>
            <Text className="c13">
              . Springer-Verlag, Berlin, Heidelberg, 197–{" "}
            </Text>
            <Text className="c1">
              207. http://dl.acm.org/citation.cfm?id=1812983.1813012
            </Text>
          </View>
          <View className="c16">
            <Text className="c1">[6] </Text>
            <Text className="c1">
              Zoya Bylinskii, Nam Wook Kim, Peter O’Donovan, Sami Alsheikh,
              Spandan{" "}
            </Text>
            <Text className="c1">
              Madan, Hanspeter Pfster, Fredo Durand, Bryan Russell, and Aaron
              Hertzmann.{" "}
            </Text>
            <Text className="c1">
              2017. Learning Visual Importance for Graphic Designs and Data
              Visualizations.{" "}
            </Text>
            <Text className="c13">In </Text>
            <Text className="c4">
              Proceedings of the 30th Annual ACM Symposium on User Interface
              Software and{" "}
            </Text>
            <Text className="c0">Technology </Text>
            <Text className="c1">(Qu&amp;#233;bec City, QC, Canada) </Text>
            <Text className="c0">(UIST ’17)</Text>
            <Text className="c1">. ACM, New York, NY, </Text>
            <Text className="c1">
              USA, 57–69. https://doi.org/10.1145/3126594.3126653
            </Text>
          </View>
          <View className="c219">
            <Text className="c1">[7] </Text>
            <Text className="c1">
              Zoya Bylinskii, Nam Wook Kim, Peter O’Donovan, Sami Alsheikh,
              Spandan{" "}
            </Text>
            <Text className="c1">
              Madan, Hanspeter Pfster, Fredo Durand, Bryan Russell, and Aaron
              Hertzmann.{" "}
            </Text>
            <Text className="c1">
              2017. Learning Visual Importance for Graphic Designs and Data
              Visualizations.{" "}
            </Text>
            <Text className="c13">In </Text>
            <Text className="c4">
              Proceedings of the 30th Annual ACM Symposium on User Interface
              Software and{" "}
            </Text>
            <Text className="c0">Technology </Text>
            <Text className="c1">(Québec City, QC, Canada) </Text>
            <Text className="c0">(UIST ’17)</Text>
            <Text className="c1">. Association for Computing </Text>
            <Text className="c13">
              Machinery, New York, NY, USA, 57–69.
              https://doi.org/10.1145/3126594.3126653
            </Text>
          </View>
          <View className="c245">
            <Text className="c1">[8] </Text>
            <Text className="c1">
              Erin Cherry and Celine Latulipe. 2014. Quantifying the Creativity
              Support of{" "}
            </Text>
            <Text className="c1">
              Digital Tools through the Creativity Support Index.{" "}
            </Text>
            <Text className="c0">ACM Trans. Comput.-Hum. </Text>
            <Text className="c0">Interact. </Text>
            <Text className="c1">
              21, 4, Article 21 (June 2014), 25 pages.
              https://doi.org/10.1145/2617588
            </Text>
          </View>
          <View className="c58">
            <Text className="c1">[9] </Text>
            <Text className="c1">
              Lydia B. Chilton, Savvas Petridis, and Maneesh Agrawala. 2019.
              VisiBlends: A{" "}
            </Text>
            <Text className="c1">Flexible Workfow for Visual Blends. In </Text>
            <Text className="c0">Proceedings of the 2019 CHI Conference </Text>
            <Text className="c0">on Human Factors in Computing Systems </Text>
            <Text className="c1">(Glasgow, Scotland Uk) </Text>
            <Text className="c0">(CHI ’19)</Text>
            <Text className="c1">. As </Text>
            <Text className="c1">
              sociation for Computing Machinery, New York, NY, USA, Article 172,
              14 pages.{" "}
            </Text>
            <Text className="c1">https://doi.org/10.1145/3290605.3300402 </Text>
          </View>
          <View className="c263">
            <Text className="c1">[10] </Text>
            <Text className="c1">
              Nicholas Davis, Chih-PIn Hsiao, Kunwar Yashraj Singh, Lisa Li,
              Sanat Moningi,{" "}
            </Text>
            <Text className="c13">
              and Brian Magerko. 2015. Drawing Apprentice: An Enactive
              Co-Creative Agent{" "}
            </Text>
            <Text className="c1">for Artistic Collaboration. In </Text>
            <Text className="c0">
              Proceedings of the 2015 ACM SIGCHI Conference on{" "}
            </Text>
            <Text className="c0">Creativity and Cognition </Text>
            <Text className="c1">(Glasgow, United Kingdom) </Text>
            <Text className="c0">(C&amp;C ’15)</Text>
            <Text className="c1">. Association for </Text>
            <Text className="c1">
              Computing Machinery, New York, NY, USA, 185–186.
              https://doi.org/10.1145/{" "}
            </Text>
            <Text className="c1">2757226.2764555 </Text>
          </View>
          <View className="c120">
            <Text className="c1">[11] </Text>
            <Text className="c1">
              Niraj Ramesh Dayama, Kashyap Todi, Taru Saarelainen, and Antti
              Oulasvirta.{" "}
            </Text>
            <Text className="c13">
              2020. GRIDS: Interactive Layout Design with Integer Programming.
              In{" "}
            </Text>
            <Text className="c4">Proceedings </Text>
            <Text className="c0">
              of the 2020 CHI Conference on Human Factors in Computing Systems{" "}
            </Text>
            <Text className="c1">(Honolulu, </Text>
            <Text className="c1">HI, USA) </Text>
            <Text className="c0">(CHI ’20)</Text>
            <Text className="c1">
              . Association for Computing Machinery, New York, NY, USA,{" "}
            </Text>
            <Text className="c1">
              1–13. https://doi.org/10.1145/3313831.3376553
            </Text>
          </View>
          <View className="c104">
            <Text className="c1">[12] </Text>
            <Text className="c1">
              Biplab Deka, Zifeng Huang, Chad Franzen, Joshua Hibschman, Daniel
              Afergan,{" "}
            </Text>
            <Text className="c13">
              Yang Li, Jefrey Nichols, and Ranjitha Kumar. 2017. Rico: A Mobile
              App Dataset{" "}
            </Text>
            <Text className="c13">
              for Building Data-Driven Design Applications. In{" "}
            </Text>
            <Text className="c4">Proceedings of the 30th Annual </Text>
            <Text className="c0">
              ACM Symposium on User Interface Software and Technology{" "}
            </Text>
            <Text className="c1">(Québec City, QC, </Text>
            <Text className="c1">Canada) </Text>
            <Text className="c0">(UIST ’17)</Text>
            <Text className="c1">
              . Association for Computing Machinery, New York, NY, USA,{" "}
            </Text>
            <Text className="c1">
              845–854. https://doi.org/10.1145/3126594.3126651
            </Text>
          </View>
          <View className="c198">
            <Text className="c1">[13] </Text>
            <Text className="c1">
              Richard O. Duda and Peter E. Hart. 1972. Use of the Hough
              Transformation to{" "}
            </Text>
            <Text className="c1">Detect Lines and Curves in Pictures. </Text>
            <Text className="c0">Commun. ACM </Text>
            <Text className="c1">15, 1 (Jan. 1972), 11–15. </Text>
            <Text className="c1">https://doi.org/10.1145/361237.361242 </Text>
          </View>
          <View className="c186">
            <Text className="c1">[14] </Text>
            <Text className="c1">
              Morwaread M. Farbood, Egon Pasztor, and Kevin Jennings. 2004.
              Hyperscore:{" "}
            </Text>
            <Text className="c1">
              A Graphical Sketchpad for Novice Composers.{" "}
            </Text>
            <Text className="c0">IEEE Comput. Graph. Appl. </Text>
            <Text className="c1">24, 1 </Text>
            <Text className="c1">
              (Jan. 2004), 50–54. https://doi.org/10.1109/MCG.2004.1255809
            </Text>
          </View>
          <View className="c190">
            <Text className="c1">[15] </Text>
            <Text className="c13">G. Fauconnier and M. Turner. 2002. </Text>
            <Text className="c4">
              The Way We Think: Conceptual Blending and{" "}
            </Text>
            <Text className="c0">the Mind’s Hidden Complexities</Text>
            <Text className="c1">. Basic Books, New York, NY, USA. [16] </Text>
            <Text className="c1">
              Charles Forceville. 1994. Pictorial Metaphor in Advertisements.{" "}
            </Text>
            <Text className="c0">Metaphor and </Text>
            <Text className="c0">Symbolic Activity </Text>
            <Text className="c1">9, 1 (1994), 1–29. </Text>
          </View>
          <View className="c145">
            <Text className="c1">[17] </Text>
            <Text className="c1">
              Jonas Frich, Lindsay MacDonald Vermeulen, Christian Remy, Michael
              Mose{" "}
            </Text>
            <Text className="c13">
              Biskjaer, and Peter Dalsgaard. 2019. Mapping the Landscape of
              Creativity Support{" "}
            </Text>
            <Text className="c1">Tools in HCI. In </Text>
            <Text className="c0">
              Proceedings of the 2019 CHI Conference on Human Factors in{" "}
            </Text>
            <Text className="c4">Computing Systems </Text>
            <Text className="c13">(Glasgow, Scotland Uk) </Text>
            <Text className="c4">(CHI ’19)</Text>
            <Text className="c13">. ACM, New York, NY, USA, </Text>
            <Text className="c1">
              Article 389, 18 pages. https://doi.org/10.1145/3290605.3300619
            </Text>
          </View>
          <View className="c90">
            <Text className="c1">[18] </Text>
            <Text className="c13">
              Krzysztof Z. Gajos, Daniel S. Weld, and Jacob O. Wobbrock. 2010.
              Automatically{" "}
            </Text>
            <Text className="c1">
              Generating Personalized User Interfaces with Supple.{" "}
            </Text>
            <Text className="c0">Artif. Intell. </Text>
            <Text className="c1">174, 12-13 </Text>
            <Text className="c1">
              (Aug. 2010), 910–950. https://doi.org/10.1016/j.artint.2010.05.005
            </Text>
          </View>
          <View className="c175">
            <Text className="c1">[19] </Text>
            <Text className="c13">
              Leon A. Gatys, Alexander S. Ecker, and Matthias Bethge. 2016.
              Image Style Trans{" "}
            </Text>
            <Text className="c13">
              fer Using Convolutional Neural Networks. In{" "}
            </Text>
            <Text className="c4">Proceedings of the IEEE Conference </Text>
            <Text className="c0">
              on Computer Vision and Pattern Recognition (CVPR)
            </Text>
            <Text className="c1">. IEEE, New York, NY, USA, </Text>
            <Text className="c1">2414–2423. </Text>
          </View>
          <View className="c46">
            <Text className="c1">[20] </Text>
            <Text className="c13">
              Ross Girshick, Ilija Radosavovic, Georgia Gkioxari, Piotr Dollár,
              and Kaiming He.{" "}
            </Text>
            <Text className="c1">
              2018. Detectron. https://github.com/facebookresearch/detectron.
            </Text>
          </View>
          <View className="c86">
            <Text className="c1">[21] </Text>
            <Text className="c1">
              Björn Hartmann, Scott R. Klemmer, Michael Bernstein, Leith
              Abdulla, Bran don Burr, Avi Robinson-Mosher, and Jennifer Gee.
              2006. Refective Physical Prototyping Through Integrated Design,
              Test, and Analysis. In{" "}
            </Text>
            <Text className="c0">
              Proceedings of the 19th Annual ACM Symposium on User Interface
              Software and Technol ogy{" "}
            </Text>
            <Text className="c1">(Montreux, Switzerland) </Text>
            <Text className="c0">(UIST ’06)</Text>
            <Text className="c1">. ACM, New York, NY, USA, 299–308. </Text>
            <Text className="c1">https://doi.org/10.1145/1166253.1166300 </Text>
          </View>
          <View className="c162">
            <Text className="c1">[22] </Text>
            <Text className="c13">
              Narayan Hegde, Jason D Hipp, Yun Liu, Michael Emmert-Buck, Emily
              Reif, Daniel{" "}
            </Text>
            <Text className="c1">
              Smilkov, Michael Terry, Carrie J Cai, Mahul B Amin, Craig H
              Mermel, Phil Q Nelson, Lily H Peng, Greg S Corrado, and Martin C
              Stumpe. 2019. Similar image search for histopathology: SMILY.{" "}
            </Text>
            <Text className="c0">npj Digital Medicine </Text>
            <Text className="c1">2, 1 (2019), 56. </Text>
            <Text className="c1">
              https://doi.org/10.1038/s41746-019-0131-z{" "}
            </Text>
          </View>
          <View className="c277">
            <Text className="c1">[23] </Text>
            <Text className="c1">
              Elizabeth Holmes. 2015. Athleisure: A Workout Look for Every Occa
              sion.
              https://www.wsj.com/video/athleisure-a-workout-look-for-every{" "}
            </Text>
            <Text className="c1">
              occasion/D0174829-3288-40F1-9E12-0F420E38AA9A.html
            </Text>
          </View>
          <View className="c192">
            <Text className="c1">[24] </Text>
            <Text className="c13">
              Q. Hou, M. Cheng, X. Hu, A. Borji, Z. Tu, and P. H. S. Torr. 2019.
              Deeply Supervised{" "}
            </Text>
            <Text className="c1">
              Salient Object Detection with Short Connections.{" "}
            </Text>
            <Text className="c0">IEEE Transactions on Pattern </Text>
            <Text className="c0">Analysis and Machine Intelligence </Text>
            <Text className="c1">
              41, 4 (2019), 815–828. https://doi.org/10.1109/{" "}
            </Text>
            <Text className="c1">TPAMI.2018.2815688 </Text>
          </View>
          <View className="c242">
            <Text className="c1">[25] </Text>
            <Text className="c13">
              P. Karimi, M. L. Maher, K. Grace, and N. Davis. 2019. A
              computational model for{" "}
            </Text>
            <Text className="c1">visual conceptual blends. </Text>
            <Text className="c0">IBM Journal of Research and Development </Text>
            <Text className="c1">63, 1 (2019), </Text>
            <Text className="c1">5:1–5:10. </Text>
          </View>
          <View className="c75">
            <Text className="c1">[26] </Text>
            <Text className="c13">
              P. Karimi, M. L. Maher, k. Grace, and N. Davis. 2019. A
              Computational Model for{" "}
            </Text>
            <Text className="c1">Visual Conceptual Blends. </Text>
            <Text className="c0">IBM J. Res. Dev. </Text>
            <Text className="c1">63, 1, Article 1 (Jan. 2019), 10 pages. </Text>
            <Text className="c1">
              https://doi.org/10.1147/JRD.2018.2881736{" "}
            </Text>
          </View>
          <View className="c196">
            <Text className="c1">[27] </Text>
            <Text className="c13">
              Joy Kim, Maneesh Agrawala, and Michael S. Bernstein. 2017. Mosaic:
              Designing{" "}
            </Text>
            <Text className="c13">
              online creative communities for sharing works-in-progress. In{" "}
            </Text>
            <Text className="c4">Proceedings of the </Text>
            <Text className="c0">
              ACM Conference on Computer Supported Cooperative Work, CSCW
            </Text>
            <Text className="c1">. Association </Text>
            <Text className="c13">
              for Computing Machinery, New York, New York, USA, 246–258.
              https://doi.org/{" "}
            </Text>
            <Text className="c1">
              10.1145/2998181.2998195 arXiv:1611.02666{" "}
            </Text>
          </View>
          <View className="c22">
            <Text className="c1">[28] </Text>
            <Text className="c1">
              Joy Kim, Sarah Sterman, Allegra Argent Beal Cohen, and Michael S.
              Bernstein.{" "}
            </Text>
            <Text className="c1">
              2017. Mechanical novel: Crowdsourcing complex work through
              refection and{" "}
            </Text>
            <Text className="c13">revision. In </Text>
            <Text className="c4">
              Proceedings of the ACM Conference on Computer Supported
              Cooperative{" "}
            </Text>
            <Text className="c4">Work, CSCW</Text>
            <Text className="c13">
              . Association for Computing Machinery, New York, New York, USA,{" "}
            </Text>
            <Text className="c1">
              233–245. https://doi.org/10.1145/2998181.2998196 arXiv:1611.02682
            </Text>
          </View>
          <View className="c149">
            <Text className="c1">[29] </Text>
            <Text className="c1">
              Janin Koch, Andrés Lucero, Lena Hegemann, and Antti Oulasvirta.
              2019. May AI? Design ideation with cooperative contextual bandits.
              In{" "}
            </Text>
            <Text className="c0">
              Proceedings of the 2019 CHI Conference on Human Factors in
              Computing Systems
            </Text>
            <Text className="c1">. Association for </Text>
            <Text className="c1">
              Computing Machinery, New York, New York, USA, 1–12.
            </Text>
          </View>
          <View className="c151">
            <Text className="c1">[30] </Text>
            <Text className="c13">
              Ranjitha Kumar, Arvind Satyanarayan, Cesar Torres, Maxine Lim,
              Salman Ahmad,{" "}
            </Text>
            <Text className="c1">
              Scott R. Klemmer, and Jerry O. Talton. 2013. Webzeitgeist: Design
              Mining the Web. In{" "}
            </Text>
            <Text className="c0">
              Proceedings of the SIGCHI Conference on Human Factors in Computing{" "}
            </Text>
            <Text className="c0">Systems </Text>
            <Text className="c1">(Paris, France) </Text>
            <Text className="c0">(CHI ’13)</Text>
            <Text className="c1">
              . ACM, New York, NY, USA, 3083–3092. https:{" "}
            </Text>
            <Text className="c1">//doi.org/10.1145/2470654.2466420 </Text>
          </View>
          <View className="c178">
            <Text className="c1">[31] </Text>
            <Text className="c1">
              James A. Landay. 1996. SILK: Sketching Interfaces Like Krazy. In{" "}
            </Text>
            <Text className="c0">Conference </Text>
            <Text className="c4">
              Companion on Human Factorsin Computing Systems{" "}
            </Text>
            <Text className="c13">(Vancouver, British Columbia, </Text>
            <Text className="c13">Canada) </Text>
            <Text className="c4">(CHI ’96)</Text>
            <Text className="c13">
              . ACM, New York, NY, USA, 398–399. https://doi.org/10.1145/{" "}
            </Text>
            <Text className="c1">257089.257396 </Text>
          </View>
          <View className="c249">
            <Text className="c1">[32] </Text>
            <Text className="c13">
              James Lin, Mark W. Newman, Jason I. Hong, and James A. Landay.
              2000. DENIM:{" "}
            </Text>
            <Text className="c1">
              Finding a Tighter Fit Between Tools and Practice for Web Site
              Design. In{" "}
            </Text>
            <Text className="c0">
              Pro ceedings of the SIGCHI Conference on Human Factors in
              Computing Systems{" "}
            </Text>
            <Text className="c1">(The Hague, The Netherlands) </Text>
            <Text className="c0">(CHI ’00)</Text>
            <Text className="c1">. ACM, New York, NY, USA, 510–517. </Text>
            <Text className="c1">https://doi.org/10.1145/332040.332486 </Text>
          </View>
          <View className="c213">
            <Text className="c1">[33] </Text>
            <Text className="c1">
              Greg Little, Lydia B. Chilton, Max Goldman, and Robert C. Miller.
              2010. TurKit:{" "}
            </Text>
            <Text className="c1">
              Human Computation Algorithms on Mechanical Turk. In{" "}
            </Text>
            <Text className="c0">Proceedings of the </Text>
            <Text className="c0">
              23Nd Annual ACM Symposium on User Interface Software and
              Technology{" "}
            </Text>
            <Text className="c1">(New </Text>
            <Text className="c1">York, New York, USA) </Text>
            <Text className="c0">(UIST ’10)</Text>
            <Text className="c1">. ACM, New York, NY, USA, 57–66. https: </Text>
            <Text className="c1">//doi.org/10.1145/1866029.1866040 </Text>
          </View>
          <View className="c163">
            <Text className="c1">[34] </Text>
            <Text className="c1">
              J. Derek Lomas, Jodi Forlizzi, Nikhil Poonwala, Nirmal Patel,
              Sharan Shodhan,{" "}
            </Text>
            <Text className="c1">
              Kishan Patel, Ken Koedinger, and Emma Brunskill. 2016. Interface
              Design Opti{" "}
            </Text>
            <Text className="c13">
              mization As a Multi-Armed Bandit Problem. In{" "}
            </Text>
            <Text className="c4">
              Proceedings of the 2016 CHI Confer ence on Human Factors in
              Computing Systems{" "}
            </Text>
            <Text className="c13">(San Jose, California, USA) </Text>
            <Text className="c4">(CHI ’16)</Text>
            <Text className="c13">. </Text>
            <Text className="c13">
              ACM, New York, NY, USA, 4142–4153.
              https://doi.org/10.1145/2858036.2858425
            </Text>
          </View>
          <View className="c203">
            <Text className="c1">[35] </Text>
            <Text className="c1">
              Ryan Louie, Andy Coenen, Cheng Zhi Huang, Michael Terry, and
              Carrie J. Cai.{" "}
            </Text>
            <Text className="c1">
              2020. Novice-AI Music Co-Creation via AI-Steering Tools for Deep
              Generative{" "}
            </Text>
            <Text className="c13">Models. In </Text>
            <Text className="c4">
              Proceedings of the 2020 CHI Conference on Human Factors in
              Computing{" "}
            </Text>
            <Text className="c0">Systems </Text>
            <Text className="c1">(Honolulu, HI, USA) </Text>
            <Text className="c0">(CHI ’20)</Text>
            <Text className="c1">. Association for Computing Machinery, </Text>
            <Text className="c1">
              New York, NY, USA, 1–13. https://doi.org/10.1145/3313831.3376739
            </Text>
          </View>
          <View className="c45">
            <Text className="c1">[36] </Text>
            <Text className="c1">
              Kurt Luther, Amy Pavel, Wei Wu, Jari-lee Tolentino, Maneesh
              Agrawala, Björn{" "}
            </Text>
            <Text className="c13">
              Hartmann, and Steven P. Dow. 2014. CrowdCrit: Crowdsourcing and
              Aggregating{" "}
            </Text>
            <Text className="c1">Visual Design Critique. In </Text>
            <Text className="c0">
              Proceedings of the Companion Publication of the 17th{" "}
            </Text>
            <Text className="c4">
              ACM Conference on Computer Supported Cooperative Work &amp;#38;
              Social Computing{" "}
            </Text>
            <Text className="c1">(Baltimore, Maryland, USA) </Text>
            <Text className="c0">(CSCW Companion ’14)</Text>
            <Text className="c1">. ACM, New York, NY, USA, </Text>
            <Text className="c1">
              21–24. https://doi.org/10.1145/2556420.2556788
            </Text>
          </View>
          <View className="c33">
            <Text className="c1">[37] </Text>
            <Text className="c13">
              J. Marks, B. Andalman, P. A. Beardsley, W. Freeman, S. Gibson, J.
              Hodgins, T. Kang,{" "}
            </Text>
            <Text className="c1">
              B. Mirtich, H. Pfster, W. Ruml, K. Ryall, J. Seims, and S.
              Shieber. 1997. Design{" "}
            </Text>
            <Text className="c13">
              Galleries: A General Approach to Setting Parameters for Computer
              Graphics and Animation. In{" "}
            </Text>
            <Text className="c4">
              Proceedings of the 24th Annual Conference on Computer Graphics and
            </Text>
          </View>
          <View className="c85">
            <Text className="c1">CHI ’21, May 8–13, 2021, Yokohama, Japan</Text>
          </View>
          <View className="c150">
            <Text className="c0">Interactive Techniques (SIGGRAPH ’97)</Text>
            <Text className="c1">. ACM Press/Addison-Wesley Publishing </Text>
            <Text className="c1">
              Co., New York, NY, USA, 389–400.
              https://doi.org/10.1145/258734.258887 [38]{" "}
            </Text>
            <Text className="c13">
              Justin Matejka, Michael Glueck, Erin Bradner, Ali Hashemi, Tovi
              Grossman, and{" "}
            </Text>
            <Text className="c1">
              George Fitzmaurice. 2018. Dream Lens: Exploration and
              Visualization of Large{" "}
            </Text>
            <Text className="c1">Scale Generative Design Datasets. In </Text>
            <Text className="c0">
              Proceedings of the 2018 CHI Conference on{" "}
            </Text>
            <Text className="c0">Human Factors in Computing Systems </Text>
            <Text className="c1">(Montreal QC, Canada) </Text>
            <Text className="c0">(CHI ’18)</Text>
            <Text className="c1">
              . Asso ciation for Computing Machinery, New York, NY, USA, Article
              369, 12 pages.{" "}
            </Text>
            <Text className="c1">https://doi.org/10.1145/3173574.3173943 </Text>
          </View>
          <View className="c89">
            <Text className="c1">[39] </Text>
            <Text className="c1">
              Brad A. Myers, Ashley Lai, Tam Minh Le, Young Seok Yoon, Andrew
              Faulring,{" "}
            </Text>
            <Text className="c1">
              and Joel Brandt. 2015. Selective undo support for painting
              applications. In{" "}
            </Text>
            <Text className="c4">
              Conference on Human Factors in Computing Systems - Proceedings
            </Text>
            <Text className="c13">, Vol. 2015-April. </Text>
            <Text className="c1">
              Association for Computing Machinery, New York, New York, USA,
              4227–4236.{" "}
            </Text>
            <Text className="c1">https://doi.org/10.1145/2702123.2702543 </Text>
          </View>
          <View className="c34">
            <Text className="c1">
              [40] J. Nielsen. 1993. Iterative user-interface design.{" "}
            </Text>
            <Text className="c0">Computer </Text>
            <Text className="c1">26, 11 (1993), 32–41. [41] </Text>
            <Text className="c1">
              Peter O’Donovan, Aseem Agarwala, and Aaron Hertzmann. 2014.
              Learning{" "}
            </Text>
            <Text className="c13">
              Layouts for Single-Page Graphic Designs.{" "}
            </Text>
            <Text className="c4">IEEE Transactions on Visualization and </Text>
            <Text className="c0">Computer Graphics </Text>
            <Text className="c1">20, 8 (2014), 1200–1213. </Text>
          </View>
          <View className="c76">
            <Text className="c1">[42] </Text>
            <Text className="c1">
              The Editors of WHY Magazine. 1972. Design Q &amp; A: Charles and
              Ray{" "}
            </Text>
            <Text className="c13">
              Eames.
              https://www.hermanmiller.com/stories/why-magazine/design-q-and-a{" "}
            </Text>
            <Text className="c1">charles-and-ray-eames/ </Text>
          </View>
          <View className="c81">
            <Text className="c1">[43] </Text>
            <Text className="c1">Francisco Pereira. 2007. </Text>
            <Text className="c0">
              Creativity and AI: A Conceptual Blending Approach
            </Text>
            <Text className="c1">. </Text>
            <Text className="c1">Mouton de Gruyter, Berlin, Germany. </Text>
          </View>
          <View className="c148">
            <Text className="c1">[44] </Text>
            <Text className="c13">
              Savvas Petridis and Lydia B. Chilton. 2019. Human Errors in
              Interpreting Visual{" "}
            </Text>
            <Text className="c13">Metaphor. In </Text>
            <Text className="c4">
              Proceedings of the 2019 on Creativity and Cognition{" "}
            </Text>
            <Text className="c13">(San Diego, CA, </Text>
            <Text className="c1">USA) </Text>
            <Text className="c0">(C&amp;C ’19)</Text>
            <Text className="c1">
              . Association for Computing Machinery, New York, NY, USA,{" "}
            </Text>
            <Text className="c1">
              187–197. https://doi.org/10.1145/3325480.3325503
            </Text>
          </View>
          <View className="c119">
            <Text className="c1">[45] </Text>
            <Text className="c1">
              Daniela Retelny, Sébastien Robaszkiewicz, Alexandra To, Walter S.
              Lasecki, Jay{" "}
            </Text>
            <Text className="c13">
              Patel, Negar Rahmati, Tulsee Doshi, Melissa Valentine, and Michael
              S. Bernstein.{" "}
            </Text>
            <Text className="c13">
              2014. Expert Crowdsourcing with Flash Teams. In{" "}
            </Text>
            <Text className="c4">Proceedings of the 27th Annual </Text>
            <Text className="c0">
              ACM Symposium on User Interface Software and Technology{" "}
            </Text>
            <Text className="c1">(Honolulu, Hawaii, </Text>
            <Text className="c1">USA) </Text>
            <Text className="c0">(UIST ’14)</Text>
            <Text className="c1">
              . ACM, New York, NY, USA, 75–85. https://doi.org/10.1145/{" "}
            </Text>
            <Text className="c1">2642918.2647409 </Text>
          </View>
          <View className="c100">
            <Text className="c1">[46] </Text>
            <Text className="c13">M. Riddoch and G. Humphreys. 2001. </Text>
            <Text className="c4">
              Object Recognition. In B. Rapp (Ed.), Hand{" "}
            </Text>
            <Text className="c0">book of Cognitive Neuropsychology</Text>
            <Text className="c1">. Psychology Press, Hove, England. [47] </Text>
            <Text className="c1">
              Carsten Rother, Vladimir Kolmogorov, and Andrew Blake. 2004.
              "GrabCut":{" "}
            </Text>
            <Text className="c13">
              Interactive Foreground Extraction Using Iterated Graph Cuts. In{" "}
            </Text>
            <Text className="c4">ACM SIGGRAPH 2004 Papers </Text>
            <Text className="c13">(Los Angeles, California) </Text>
            <Text className="c4">(SIGGRAPH ’04)</Text>
            <Text className="c13">. ACM, New York, NY, USA, </Text>
            <Text className="c1">
              309–314. https://doi.org/10.1145/1186562.1015720
            </Text>
          </View>
          <View className="c131">
            <Text className="c1">[48] </Text>
            <Text className="c1">
              Sam Sanders. 2015. For The Modern Man, The Sweatpant Moves Out Of
              The Gym.
              https://www.npr.org/2015/04/08/397138654/for-the-modern-man-the{" "}
            </Text>
            <Text className="c1">sweatpant-moves-out-of-the-gym </Text>
          </View>
          <View className="c67">
            <Text className="c1">[49] </Text>
            <Text className="c1">
              Ben Shneiderman. 2007. Creativity Support Tools: Accelerating
              Discovery and{" "}
            </Text>
            <Text className="c1">Innovation. </Text>
            <Text className="c0">Commun. ACM </Text>
            <Text className="c1">
              50, 12 (Dec. 2007), 20–32. https://doi.org/10.1145/{" "}
            </Text>
            <Text className="c1">1323688.1323689 </Text>
          </View>
          <View className="c279">
            <Text className="c1">[50] </Text>
            <Text className="c1">
              Pao Siangliulue, Joel Chan, Steven P. Dow, and Krzysztof Z. Gajos.
              2016. Idea{" "}
            </Text>
            <Text className="c13">
              Hound: Improving Large-scale Collaborative Ideation with
              Crowd-Powered Real{" "}
            </Text>
            <Text className="c1">time Semantic Modeling. In </Text>
            <Text className="c0">
              Proceedings of the 29th Annual Symposium on User{" "}
            </Text>
            <Text className="c4">Interface Software and Technology </Text>
            <Text className="c13">(Tokyo, Japan) </Text>
            <Text className="c4">(UIST ’16)</Text>
            <Text className="c13">. ACM, New York, NY, </Text>
            <Text className="c1">
              USA, 609–624. https://doi.org/10.1145/2984511.2984578
            </Text>
          </View>
          <View className="c224">
            <Text className="c1">[51] </Text>
            <Text className="c1">
              Vikash Singh, Celine Latulipe, Erin Carroll, and Danielle
              Lottridge. 2011. The{" "}
            </Text>
            <Text className="c13">
              Choreographer’s Notebook: A Video Annotation System for Dancers
              and Chore{" "}
            </Text>
            <Text className="c13">ographers. In </Text>
            <Text className="c4">
              Proceedings of the 8th ACM Conference on Creativity and Cognition{" "}
            </Text>
            <Text className="c1">(Atlanta, Georgia, USA) </Text>
            <Text className="c0">(C&amp;C ’11)</Text>
            <Text className="c1">
              . Association for Computing Machinery, New{" "}
            </Text>
            <Text className="c1">
              York, NY, USA, 197–206. https://doi.org/10.1145/2069618.2069653
            </Text>
          </View>
          <View className="c157">
            <Text className="c1">[52] </Text>
            <Text className="c1">
              Gillian Smith, Jim Whitehead, and Michael Mateas. 2010. Tanagra: A
              Mixed{" "}
            </Text>
            <Text className="c1">initiative Level Design Tool. In </Text>
            <Text className="c0">
              Proceedings of the Fifth International Conference{" "}
            </Text>
            <Text className="c4">on the Foundations of Digital Games </Text>
            <Text className="c13">(Monterey, California) </Text>
            <Text className="c4">(FDG ’10)</Text>
            <Text className="c13">. ACM, New </Text>
            <Text className="c1">
              York, NY, USA, 209–216. https://doi.org/10.1145/1822348.1822376
            </Text>
          </View>
          <View className="c68">
            <Text className="c1">[53] </Text>
            <Text className="c1">Robert J Sternberg. 2011. </Text>
            <Text className="c0">Cognitive Psychology</Text>
            <Text className="c1">. Cengage Learning, Boston, MA, </Text>
            <Text className="c1">USA. </Text>
          </View>
          <View className="c94">
            <Text className="c1">[54] </Text>
            <Text className="c13">
              Sou Tabata, Hiroki Yoshihara, Haruka Maeda, and Kei Yokoyama.
              2019. Automatic{" "}
            </Text>
            <Text className="c1">
              Layout Generation for Graphical Design Magazines. In{" "}
            </Text>
            <Text className="c0">ACM SIGGRAPH 2019 </Text>
          </View>
          <View className="c112">
            <Text className="c1">Chilton, et al. </Text>
          </View>
          <View className="c274">
            <Text className="c0">Posters </Text>
            <Text className="c1">(Los Angeles, California) </Text>
            <Text className="c0">(SIGGRAPH ’19)</Text>
            <Text className="c1">. ACM, New York, NY, USA, </Text>
            <Text className="c1">
              Article 9, 2 pages. https://doi.org/10.1145/3306214.3338574
            </Text>
          </View>
          <View className="c226">
            <Text className="c1">[55] </Text>
            <Text className="c1">
              Michael Terry and Elizabeth D. Mynatt. 2002. Side Views:
              Persistent, on Demand Previews for Open-Ended Tasks. In{" "}
            </Text>
            <Text className="c0">
              Proceedings of the 15th Annual ACM Symposium on User Interface
              Software and Technology{" "}
            </Text>
            <Text className="c1">(Paris, France) </Text>
            <Text className="c0">(UIST ’02)</Text>
            <Text className="c1">
              . Association for Computing Machinery, New York, NY, USA, 71–80.{" "}
            </Text>
            <Text className="c1">https://doi.org/10.1145/571985.571996 </Text>
          </View>
          <View className="c241">
            <Text className="c1">[56] </Text>
            <Text className="c13">
              Kashyap Todi, Jussi Jokinen, Kris Luyten, and Antti Oulasvirta.
              2019. Individualis ing Graphical Layouts with Predictive Visual
              Search Models.{" "}
            </Text>
            <Text className="c4">ACM Trans. Interact. Intell. Syst. </Text>
            <Text className="c13">
              10, 1, Article 9 (Aug. 2019), 24 pages.
              https://doi.org/10.1145/3241381
            </Text>
          </View>
          <View className="c236">
            <Text className="c1">[57] </Text>
            <Text className="c1">
              Rajan Vaish, Shirish Goyal, Amin Saberi, and Sharad Goel. 2018.
              Creating Crowdsourced Research Talks at Scale. In{" "}
            </Text>
            <Text className="c0">
              Proceedings of the 2018 World Wide Web Conference{" "}
            </Text>
            <Text className="c1">(Lyon, France) </Text>
            <Text className="c0">(WWW ’18)</Text>
            <Text className="c1">. International World Wide Web </Text>
            <Text className="c1">
              Conferences Steering Committee, Republic and Canton of Geneva,
              CHE, 1–11.
            </Text>
          </View>
          <View className="c95">
            <Text className="c64">
              https://doi.org/10.1145/3178876.3186031{" "}
            </Text>
            <Text className="c1">[58] </Text>
            <Text className="c1">
              Margot van Mulken, Rob le Pair, and Charles Forceville. 2010. The
              impact of{" "}
            </Text>
            <Text className="c13">
              perceived complexity, deviation and comprehension on the
              appreciation of visual{" "}
            </Text>
            <Text className="c13">
              metaphor in advertising across three European countries.{" "}
            </Text>
            <Text className="c4">Journal of Pragmatics </Text>
            <Text className="c1">
              42, 12 (2010), 3418 – 3430.
              https://doi.org/10.1016/j.pragma.2010.04.030
            </Text>
          </View>
          <View className="c36">
            <Text className="c1">[59] </Text>
            <Text className="c1">
              Hao-Chuan Wang, Dan Cosley, and Susan R. Fussell. 2010. Idea
              Expander: Sup{" "}
            </Text>
            <Text className="c13">
              porting Group Brainstorming with Conversationally Triggered Visual
              Thinking{" "}
            </Text>
            <Text className="c13">Stimuli. In </Text>
            <Text className="c4">
              Proceedings of the 2010 ACM Conference on Computer Supported
              Cooper ative Work{" "}
            </Text>
            <Text className="c13">(Savannah, Georgia, USA) </Text>
            <Text className="c4">(CSCW ’10)</Text>
            <Text className="c13">. Association for Computing Ma </Text>
            <Text className="c13">
              chinery, New York, NY, USA, 103–106.
              https://doi.org/10.1145/1718918.1718938
            </Text>
          </View>
          <View className="c281">
            <Text className="c1">[60] </Text>
            <Text className="c1">
              Jingdong Wang and Xian-Sheng Hua. 2011. Interactive image search
              by color{" "}
            </Text>
            <Text className="c1">map. </Text>
            <Text className="c0">
              ACM Transactions on Intelligent Systems and Technology (TIST){" "}
            </Text>
            <Text className="c1">3, 1 (2011), </Text>
            <Text className="c1">1–23. </Text>
          </View>
          <View className="c48">
            <Text className="c1">[61] </Text>
            <Text className="c1">
              Kento Watanabe, Yuichiroh Matsubayashi, Kentaro Inui, Tomoyasu
              Nakano, Satoru Fukayama, and Masataka Goto. 2017. LyriSys: An
              interactive support{" "}
            </Text>
            <Text className="c13">
              system for writing lyrics based on topic transition. In{" "}
            </Text>
            <Text className="c4">
              International Conference on Intelligent User Interfaces,
              Proceedings IUI
            </Text>
            <Text className="c13">. Association for Computing Machinery, </Text>
            <Text className="c1">
              New York, New York, USA, 559–563.
              https://doi.org/10.1145/3025171.3025194
            </Text>
          </View>
          <View className="c204">
            <Text className="c1">[62] </Text>
            <Text className="c1">
              Ariel Weingarten, Ben Lafreniere, George Fitzmaurice, and Tovi
              Grossman. 2019. DreamRooms: Prototyping Rooms in Collaboration
              with a Generative Process. In{" "}
            </Text>
            <Text className="c0">
              Proceedings of the 45th Graphics Interface Conference on Proceed
              ings of Graphics Interface 2019{" "}
            </Text>
            <Text className="c1">(Kingston, Canada) </Text>
            <Text className="c0">(GI’19)</Text>
            <Text className="c1">. Canadian Human </Text>
            <Text className="c1">
              Computer Communications Society, Waterloo, CAN, Article 19, 9
              pages. https:{" "}
            </Text>
            <Text className="c1">//doi.org/10.20380/GI2019.19 </Text>
          </View>
          <View className="c195">
            <Text className="c1">[63] </Text>
            <Text className="c13">
              Anbang Xu, Shih-Wen Huang, and Brian Bailey. 2014. Voyant:
              Generating Struc{" "}
            </Text>
            <Text className="c13">
              tured Feedback on Visual Designs Using a Crowd of Non-experts. In{" "}
            </Text>
            <Text className="c4">Proceedings </Text>
            <Text className="c4">
              of the 17th ACM Conference on Computer Supported Cooperative Work
              &amp;#38; Social{" "}
            </Text>
            <Text className="c0">Computing </Text>
            <Text className="c1">(Baltimore, Maryland, USA) </Text>
            <Text className="c0">(CSCW ’14)</Text>
            <Text className="c1">. ACM, New York, NY, USA, </Text>
            <Text className="c1">
              1433–1444. https://doi.org/10.1145/2531602.2531604
            </Text>
          </View>
          <View className="c193">
            <Text className="c1">[64] </Text>
            <Text className="c1">
              Lixiu Yu, Aniket Kittur, and Robert E. Kraut. 2014. Distributed
              Analogical Idea{" "}
            </Text>
            <Text className="c1">Generation: Inventing with Crowds. In </Text>
            <Text className="c0">Proceedings of the SIGCHI Conference on </Text>
            <Text className="c4">Human Factors in Computing Systems </Text>
            <Text className="c13">(Toronto, Ontario, Canada) </Text>
            <Text className="c4">(CHI ’14)</Text>
            <Text className="c13">. ACM, </Text>
            <Text className="c1">
              New York, NY, USA, 1245–1254.
              https://doi.org/10.1145/2556288.2557371
            </Text>
          </View>
          <View className="c41">
            <Text className="c1">[65] </Text>
            <Text className="c1">
              Lixiu Yu, Aniket Kittur, and Robert E. Kraut. 2014. Searching for
              Analogical{" "}
            </Text>
            <Text className="c13">Ideas with Crowds. In </Text>
            <Text className="c4">
              Proceedings of the 32Nd Annual ACM Conference on Human{" "}
            </Text>
            <Text className="c0">Factors in Computing Systems </Text>
            <Text className="c1">(Toronto, Ontario, Canada) </Text>
            <Text className="c0">(CHI ’14)</Text>
            <Text className="c1">. ACM, New </Text>
            <Text className="c1">
              York, NY, USA, 1225–1234. https://doi.org/10.1145/2556288.2557378
            </Text>
          </View>
          <View className="c127">
            <Text className="c1">[66] </Text>
            <Text className="c1">
              Lixiu Yu and Jefrey V. Nickerson. 2011. Cooks or Cobblers?: Crowd
              Creativity{" "}
            </Text>
            <Text className="c13">Through Combination. In </Text>
            <Text className="c4">
              Proceedings of the SIGCHI Conference on Human Factors{" "}
            </Text>
            <Text className="c0">in Computing Systems </Text>
            <Text className="c1">(Vancouver, BC, Canada) </Text>
            <Text className="c0">(CHI ’11)</Text>
            <Text className="c1">. ACM, New York, NY, </Text>
            <Text className="c1">
              USA, 1393–1402. https://doi.org/10.1145/1978942.1979147
            </Text>
          </View>
          <View className="c29">
            <Text className="c1">[67] </Text>
            <Text className="c1">
              Zhenpeng Zhao, Sriram Karthik Badam, Senthil Chandrasegaran, Deok
              Gun{" "}
            </Text>
            <Text className="c13">
              Park, Niklas Elmqvist, Lorraine Kisselburgh, and Karthik Ramani.
              2014. SkWiki:{" "}
            </Text>
            <Text className="c1">
              A multimedia sketching system for collaborative creativity. In{" "}
            </Text>
            <Text className="c0">Conference on </Text>
            <Text className="c0">
              Human Factors in Computing Systems - Proceedings
            </Text>
            <Text className="c1">. Association for Computing </Text>
            <Text className="c1">
              Machinery, New York, New York, USA, 1235–1244.
              https://doi.org/10.1145/{" "}
            </Text>
            <Text className="c1">2556288.2557394</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PdfView;
