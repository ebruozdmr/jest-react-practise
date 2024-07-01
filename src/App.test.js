import { findByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import the file which is tested
import App from "./App";

//Grouping of the same tests
describe("text test", () => {
  //it() is also used instead of test()
  // test("test with getByText ", () => {
  //   //render the file which is tested
  //   render(<App></App>);
  //   const element = screen.getByText(/React Testing/i); //RegExp ile bu ifadenin text içerisindeki varlığı test edilir.
  //   //Bu yapı da testi yapılan text'in içerisinde ilgili ifadenin bulunup bulunmadığı ile alakalı bilgi verir.
  //   // const element = screen.getByText("React Testing", {
  //   //   exact: false,
  //   // });
  //   expect(element).toBeInTheDocument();
  // });
  // test("test with getByText 2", () => {
  //   render(<App></App>);
  //   /*Burada text'in bütününün "varlığı" test edilir.
  //     Ayrıca getByText text'in sadece bir tane olduğu durumlarda success döner.
  //   */
  //   const element = screen.getByText("React Testing");
  //   expect(element).toBeInTheDocument();
  // });
  // test("test with queryByText ", () => {
  //   render(<App></App>);
  //   //Burada text'in bütününün "var olmadığı" test edilir.
  //   const element = screen.queryByText("React Testing"); //when "no match" case return null
  //   expect(element).not.toBeInTheDocument();
  // });
  // /*JEST ifadesi sayfa yüklendikten yarım saniye sonra arayüzde render edildi.
  // Bu nedenle async/await yapısı ile kullanılan "findByText" ile test işlemi gerçekleştirilir.
  // */
  // test("test of async/await structure", async () => {
  //   render(<App></App>);
  //   const element = await screen.findByText("JEST");
  //   expect(element).toBeInTheDocument();
  // });
  // test("testing multimatch text", () => {
  //   render(<App></App>);
  //   const element = screen.getAllByText("React Testing by using..."); //return array
  //   // expect(element[0]).toBeInTheDocument();
  //   expect(element).toHaveLength(2);
  // });

  // test("testing of async/await structure 2", async () => {
  //   render(<App></App>);

  //   await waitFor(
  //     () => {
  //       expect(screen.getByText("JEST")).toBeInTheDocument();
  //     },
  //     { timeout: 1000 }
  //   );
  //   await waitFor(
  //     () => {
  //       expect(screen.getByText("software")).toBeInTheDocument();
  //     },
  //     { timeout: 1000 }
  //   );
  // });

  // test("testing of input value via label tag", () => {
  //   render(<App></App>);
  //   /* testing for label tag */
  //   expect(screen.getByLabelText("React")).toBeInTheDocument(); // select of input tag
  //   /* testing for input value */
  //   expect(screen.getByLabelText("React")).toHaveValue("test");
  // });

  // test("testing of div element", () => {
  //   render(<App></App>);
  //   // expect(screen.getAllByTitle("title")[0]).toBeInTheDocument();
  //   // expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
  //   // expect(screen.getByRole("heading")).toBeInTheDocument();
  //   // expect(screen.getAllByRole("heading")[1]).toBeInTheDocument();
  //   // expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  //   // expect(screen.getByTestId("test")).toBeInTheDocument();
  //   // expect(screen.getByText("Click").href).toContain("http");
  //   // expect(screen.getByAltText("img")).toBeInTheDocument();
  //   expect(screen.getByRole("textbox")).toBeInTheDocument(); //testing for input tag
  // });
  // test("testing of multiple input tags", () => {
  //   render(<App></App>);
  //   const firstNameInput = screen.getByRole("textbox", { name: /first name/i }); //label text'i "first name" olan input tag'i
  //   expect(firstNameInput).toBeInTheDocument();
  //   expect(firstNameInput).toHaveAttribute(
  //     "placeholder",
  //     "Enter the first name"
  //   );

  //   const lastNameInput = screen.getByRole("textbox", { name: /second name/i }); // i flag: insensitive case
  //   expect(lastNameInput).toBeInTheDocument();
  //   expect(lastNameInput).toHaveAttribute("placeholder", "Enter the second name");
  // });
  // test("testing for general purposes", () => {
  //   render(<App></App>);
  //   expect(2 + 2).toBe(4);
  //   let user = {
  //     name: "Ebru",
  //   };
  //   user["age"] = 29;
  //   expect(user).toEqual({ name: "Ebru", age: 29 });
  // });

  test("testing for user events", async () => {
    const { container } = render(<App></App>);
    console.log(container);
    screen.debug();
    //userEvent, daha gerçekçi kullanıcı etkileşimlerini simüle etmeye yarar.
    const user = userEvent.setup();
    //user events are asyncronous events
    //pointer represents the mouse events
    // await user.pointer({
    //   keys: "[MouseLeft]",
    //   target: screen.getByRole("button"),
    // });
    // expect(screen.getByRole("heading", { name: /Counter/i })).toHaveTextContent(
    //   "1"
    // );

    // await user.click(screen.getByRole("button", { name: /Increase/i }));
    // expect(screen.getByRole("heading", { name: /Counter/i })).toHaveTextContent(
    //   "2"
    // );
    /*container kullanımı ile, DOM elemanlarına doğrudan erişim sağlanabilir.
    Burada container ile render edilen bileşenin üst düzey DOM elemanına erişilmiş olur.
    Ancak React Testing Library ise mümkün olduğunca doğal ve kullanıcı odaklı sorgular 
    kullanılmasını tevsiye eder. Bu nedenle container kullanımı yaygın değildir.
     */

    const firstChild = container.firstChild;
    expect(firstChild).toHaveTextContent(/Counter/i);
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});
