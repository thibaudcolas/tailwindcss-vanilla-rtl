import postcss from "postcss";
import tailwindcss from "tailwindcss";
import vanillaRTL from "../src/index";

const utilities = [
  "mx-0",
  "mr-0",
  "ml-0",
  "px-0",
  "pr-0",
  "pl-0",
  "inset-0",
  "inset-x-0",
  "right-0",
  "left-0",
  "space-x-0",
  "scroll-mx-0",
  "scroll-mr-0",
  "scroll-ml-0",
  "scroll-px-0",
  "scroll-pr-0",
  "scroll-pl-0",
  "rounded-t-[JIT]",
  "rounded-r-[JIT]",
  "rounded-b-[JIT]",
  "rounded-l-[JIT]",
  "rounded-tl-[JIT]",
  "rounded-tr-[JIT]",
  "rounded-br-[JIT]",
  "rounded-bl-[JIT]",
  "border-x-0",
  "border-r-0",
  "border-l-0",
  "border-x-black",
  "border-r-black",
  "border-l-black",
  "border-opacity-0",
  "divide-x-0",
  "text-right",
  "text-left",
];

const trimmer = (val) => val.replace(/\s+/g, " ").trim();

it("has consistent output", () => {
  const output = utilities.map((className) => {
    const processor = postcss([
      tailwindcss({
        content: [
          {
            raw: className,
          },
        ],
        plugins: [vanillaRTL],
        corePlugins: {
          ...vanillaRTL.disabledCorePlugins,
        },
      }),
    ]);
    const output = processor.process("@tailwind utilities").css;
    return trimmer(output);
  });

  expect(output).toMatchInlineSnapshot(`
    [
      ".mx-0 { margin-inline-start: 0px; margin-inline-end: 0px }",
      ".mr-0 { margin-inline-end: 0px }",
      ".ml-0 { margin-inline-start: 0px }",
      ".px-0 { padding-inline-start: 0px; padding-inline-end: 0px }",
      ".pr-0 { padding-inline-end: 0px }",
      ".pl-0 { padding-inline-start: 0px }",
      ".inset-0 { top: 0px; inset-inline-end: 0px; bottom: 0px; inset-inline-start: 0px }",
      ".inset-x-0 { inset-inline-start: 0px; inset-inline-end: 0px }",
      ".right-0 { inset-inline-end: 0px }",
      ".left-0 { inset-inline-start: 0px }",
      ".space-x-0 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-inline-end: calc(0px * var(--tw-space-x-reverse)); margin-inline-start: calc(0px * calc(1 - var(--tw-space-x-reverse))) }",
      ".scroll-mx-0 { scroll-margin-inline-start: 0px; scroll-margin-inline-end: 0px }",
      ".scroll-mr-0 { scroll-margin-inline-end: 0px }",
      ".scroll-ml-0 { scroll-margin-inline-start: 0px }",
      ".scroll-px-0 { scroll-padding-inline-start: 0px; scroll-padding-inline-end: 0px }",
      ".scroll-pr-0 { scroll-padding-inline-end: 0px }",
      ".scroll-pl-0 { scroll-padding-inline-start: 0px }",
      ".rounded-t-\\[JIT\\] { border-start-start-radius: JIT; border-start-end-radius: JIT }",
      ".rounded-r-\\[JIT\\] { border-start-end-radius: JIT; border-end-end-radius: JIT }",
      ".rounded-b-\\[JIT\\] { border-end-end-radius: JIT; border-end-start-radius: JIT }",
      ".rounded-l-\\[JIT\\] { border-start-start-radius: JIT; border-end-start-radius: JIT }",
      ".rounded-tl-\\[JIT\\] { border-start-start-radius: JIT }",
      ".rounded-tr-\\[JIT\\] { border-start-end-radius: JIT }",
      ".rounded-br-\\[JIT\\] { border-end-end-radius: JIT }",
      ".rounded-bl-\\[JIT\\] { border-end-start-radius: JIT }",
      ".border-x-0 { border-inline-start-width: 0px; border-inline-end-width: 0px }",
      ".border-r-0 { border-inline-end-width: 0px }",
      ".border-l-0 { border-inline-start-width: 0px }",
      ".border-x-black { --tw-border-opacity: 1; border-inline-start-color: rgb(0 0 0 / var(--tw-border-opacity)); border-inline-end-color: rgb(0 0 0 / var(--tw-border-opacity)) }",
      ".border-r-black { --tw-border-opacity: 1; border-inline-end-color: rgb(0 0 0 / var(--tw-border-opacity)) }",
      ".border-l-black { --tw-border-opacity: 1; border-inline-start-color: rgb(0 0 0 / var(--tw-border-opacity)) }",
      ".border-opacity-0 { --tw-border-opacity: 0 }",
      ".divide-x-0 > :not([hidden]) ~ :not([hidden]) { --tw-divide-x-reverse: 0; border-inline-end-width: calc(0px * var(--tw-divide-x-reverse)); border-inline-start-width: calc(0px * calc(1 - var(--tw-divide-x-reverse))) }",
      ".text-right { text-align: end }",
      ".text-left { text-align: start }",
    ]
  `);
});
