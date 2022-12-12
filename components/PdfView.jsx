import React, { useCallback, useState, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  View,
  usePDF,
  Font,
} from "@react-pdf/renderer";
import { pdfjs, Document as DOCUMENT, Page as PAGE } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import pdfmap from "../pdfmap1.json";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    height: "100rem",
    width: "100rem",
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  title: {
    color: "#000000",
    fontWeight: 400,
    textDecoration: "none",
    verticalAlign: "baseline",
    fontSize: "17.2pt",
    fontStyle: "normal",
  },
  text: {
    color: "#000000",
    fontWeight: 900,
    display: "block",
  },
  hightlight: {
    backgroundColor: "yellow",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: "20pt",
    margin: "20px 0",
    fontWeight: 900,
    textAlign: "center",
    display: "block",
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
    gap: 20,
  },
  names: {
    fontSize: "13pt",
    textAlign: "center",
    display: "block",
    width: "50%",
  },
  space: {
    marginTop: "10px",
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
function PdfView({ paragraphs }) {
  console.log("paragraphs is here", paragraphs);

  return (
    <Document>
      <Page style={styles.body} wrap>
        <Text style={styles.header}>
          VisiFit: Structuring Iterative Improvement for Novice Designers
        </Text>
        <View style={styles.twoColumn}>
          <View style={styles.names}>
            <Text style={styles.text}>Lydia B. Chilton</Text>
            <Text style={styles.text}>chilton@cs.columbia.edu</Text>
            <Text>Columbia University </Text>
            <Text style={styles.space}>Sam Ross</Text>
            <Text>shr@barnard.edu</Text>
            <Text>New York, New York, USA</Text>
            <Text>Barnard College</Text>
            <Text>Barnard College New York</Text>
          </View>
          <View style={styles.names}>
            <Text> Ecenaz Jen Ozmen</Text>
            <Text>eo2419@columbia.edu </Text>
            <Text> Columbia University </Text>
            <Text>New York, New York, USA</Text>
            <Text style={styles.space}> Vivian Liu </Text>
            <Text>vivian@cs.columbia.edu/</Text>
            <Text>Columbia University New York</Text>
            <Text>New York, USA</Text>
          </View>
        </View>
        <Image style={{ marginTop: 20 }} src="images/image5.png" />
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
            them to be higher fdelity. To help novices, we aim to add structure
            to the iterative improvement process. We introduce a method for im
            proving prototypes that uses{" "}
          </Text>
          <Text className="c8">secondary design dimensions </Text>
          <Text className="c3">
            to explore a structured design space. This method is grounded in the
            cognitive{" "}
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
            and the full citation on the frst page. Copyrights for components of
            this work owned by others than ACM must be honored. Abstracting with
            credit is permitted. To copy otherwise, or republish, to post on
            servers or to redistribute to lists, requires prior specifc
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
            Lydia B. Chilton, Ecenaz Jen Ozmen, Sam Ross, and Vivian Liu. 2021.
            VisiFit:{" "}
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
            is necessary to improve it. If a prototype passes an evaluation, it{" "}
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
            of concept by iterating upon features and prototype reliability. In{" "}
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
            explore an expansive design space are not the right tools to explore{" "}
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
            they are open-ended enough to encapsulate all aspects of the design{" "}
          </Text>
          <Text className="c11">
            process, but well-defned enough to test in a short time frame.{" "}
          </Text>
          <Text className="c3">
            Moreover, cognitive scientists consider blending to be an important
            aspect of general creativity forits ability to “create new meaning
            out of old.” [
          </Text>
          <Text className="c5">15</Text>
          <Text className="c3">
            ] Currently, tools already exist to help people brainstorm{" "}
          </Text>
          <Text className="c11">and create initial prototypes [</Text>
          <Text className="c5">9</Text>
          <Text className="c11">] by fnding the right images and </Text>
          <Text className="c3">
            arrangements to use for the blend. However, visual blends generally{" "}
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
        <Text
          className="c5"
          id="highlight-1"
          style={paragraphs ? styles.hightlight : ""}
        >
          We perform several formative studies to learn how experts ap proach
          the iterative improvement of visual blends. From an analysis of blends
          created by experts and a participatory design process with graphic
          designers, we learned that blends do not simply blend the
          surface-levelstyle of two objects, they combine the secondary visual
          dimensions of both objects such as silhouette, color and internal
          details. Based on this observation, we present a method for structur
          ing the iterative improvement process of blends based on secondary
          design dimensions . In this method, the improvement process is frst
          broken into stages that blend each of the dimensions separately.
        </Text>
        <Text>
          We present VisiFit – a computational design tool that allows novice
          graphic designers to improve a prototype of a visual blend. A prior
          system called VisiBlends [9] helps novices create rough initial
          prototypes of blends by overlaying two objects with the same shape.
          VisiFit helps users refne those rough prototypes into seamless and
          aesthetic blends. VisiFit structures the process of creating second
          iterations by introducing a pipeline of computational tools that allow
          users to quickly and easily edit secondary design dimensions. Figure 1
          shows two examples of the VisiBlends output and the result of novices
          using VisiFit to improve them in under 4 minutes. Our evaluation shows
          that novices can quickly and easily iterate on prototypes to create
          seamless and aesthetic blends.
        </Text>
        <Text>
          This paper makes the following contributions: • Three preliminary
          investigations into the process of improv- ing prototypes of visual
          blends: a demonstration of how fully automatic systems fail, an
          analysis of patterns used by professionals, and a co-design process
          with graphic artists. • Three design principles for a computational
          approach to improving visual blends. • A method of using secondary
          design dimensions to structure the improvement process. This method is
          grounded in the neuroscience of human visual object recognition. •
          VisiFit, a system that applies the method and design princi- ples in a
          pipeline of computational tools. • An evaluation of VisiFit showing
          that in under 4 minutes, novices can substantially improve blends in
          76% of cases and create blends suitable to publish on social media in
          70% of cases. We conclude with a discussion of how secondary design
          dimen- sions can help structure iteration in other felds and how
          pipelines of computational design tools can support the iterative
          design pro- cess.
        </Text>
        <Text>
          2 2.1 RELATED WORK Design Tools Design tools and creativity support
          tools (CSTs) have a rich tradi- tion of accelerating innovation and
          discovery [49] by supporting the design process. A survey of 143
          papers from 1999-2018 on cre- ativity support tools (CSTs) found that
          there are papers supporting all phases of the design process:
          ideation, exploration, prototyp- ing, implementation, evaluation, and
          process/pipeline, and iteration. [17]. Many of these tools support
          more than one phase of the design process. However, not all phases of
          the design process are equally represented in the literature. In fact,
          a majority of these tools fo- cused on either very early or very late
          phases of the design process. Of the systems in the survey, 45%
          support ideation [30, 50, 59], 41% support implementation, including
          high-fdelity tools [57] or low-fdelity tools for prototyping or
          sketching [10, 21, 31, 32], and 18% supported evaluation through
          feedback [36, 63] or expert an- notation [51]. However, only 6% of the
          systems surveyed supported iteration, and only 4% supported the
          related task of design man- agement or pipelines. More research is
          needed on how to support iteration more efectively — that is, how to
          help designers improve
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

const App = ({ paragraphs }) => {
  const document = <PdfView paragraphs={paragraphs} />;
  const [instance, updateInstance] = usePDF({
    document,
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (paragraphs) {
      updateInstance();
      setPage(5);
      pdfmap.map((item) => {
        if (Number(item.id) == paragraphs.paragraphs[0]) {
          // setPage(Number(item.page));
          console.log("item.page " + item.page);
          console.log(item.paragraphs);
        }
      });
    }
  }, [paragraphs]);
  if (instance.loading) return <div>Loading ...</div>;
  if (instance.error) return <div>Something went wrong: {error}</div>;
  const clicked = (index) => {
    pdfmap.map((item) => {
      if (Number(item.id) == paragraphs.paragraphs[index]) {
        setPager(Number(item.page));
        // setSearchText(item.paragraphs.split(" "));
      }
    });
  };

  return (
    <div className="pdfview">
      <div className="pdfview__container">
        <div className="pdfview__container__document">
          <DOCUMENT
            file={instance.blob}
            // onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className=""
          >
            <PAGE
              className="w-full text-center"
              pageNumber={page}
              // customTextRenderer={textRenderer}
            />
          </DOCUMENT>

          <div className="flex flex-col text-white ml-12 text-sm">
            {(() => {
              if (paragraphs) {
                if (paragraphs.sections) {
                  let sections = paragraphs.sections.replace(/'/g, '"'); //replacing all ' with "
                  let scores = paragraphs.scores;
                  sections = JSON.parse(sections);

                  let buttons = [];
                  for (let i = 0; i < sections.length; i++) {
                    let para = "";
                    pdfmap.map((item) => {
                      if (Number(item.id) == paragraphs.paragraphs[i]) {
                        para = item.paragraphs.split(" ").slice(0, 7).join(" ");
                      }
                    });

                    buttons.push(
                      <div className="flex items-center mb-3">
                        <button
                          onClick={() => clicked(i)}
                          type="button"
                          className={`${
                            scores[i] < 0.7 ? "bg-yellow-500" : "bg-rose-800"
                          } text-white w-44 py-4 rounded-lg text-center font-bold mr-3`}
                        >
                          {sections[i]}
                        </button>
                        <span>{para}...</span>
                      </div>
                    );
                  }

                  return buttons;
                }
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
