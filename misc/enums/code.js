export const list = {
  horizontal: {
    vue: `
        <> Using Tailwind for style </>
          <div class="tw-flex tw-space-x-4 tw-overflow-x-auto">
              <div
                v-for="(item, index) in 10"
                class="tw-bg-gray-500 tw-rounded-lg tw-min-w-full sm:tw-min-w-[50%] lg:tw-min-w-[20%]"
              >
                  <div class="tw-p-4">
                      <img src="~/assets/images/heyday.png" alt="" >
                  </div>
                  <div class="tw-flex tw-flex-col tw-flex-1 tw-p-4 tw-border-t-1 tw-border-solid tw-border-white-400">
                      <div>
                          <h2 class="tw-font-bold"> Title {{ index }} </h2>
                          <p class="tw-leading-normal"> {{ index * 2 }} </p>
                      </div>
                      <div>
                          <> Using Vuetify for button </>
                          <v-btn class="c-button-header tw-w-full"> Buy </v-btn>
                      </div>
                  </div>
              </div>
          </div>
        `,
    html: `
         <> Using Tailwind for style </>
         <div class="flex space-x-4 overflow-x-auto">
              <div class="bg-gray-500 rounded-lg min-w-full sm:min-w-[50%] lg:min-w-[20%]">
                  <div class="p-4">
                      <img src="~/assets/images/heyday.png" alt="" >
                  </div>
                  <div class="flex flex-col flex-1 p-4 border-t-1 border-solid border-white-400">
                      <div>
                          <h2 class="font-bold"> Title 0 </h2>
                          <p class="leading-normal"> 0 </p>
                      </div>
                      <div>
                          <button class="w-full"> Buy </button>
                      </div>
                  </div>
              </div>
         </div>`,
    css: `
      <> Class name of Tailwind </>
      <> Note: Only use when your project does not have Tailwind installed </>

      .space-x-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
        margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
      }
      .bg-gray-500 {
        --tw-bg-opacity: 1;
        background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .border-solid {
        border-style: solid;
      }
      .border-t-1 {
        border-top-width: 1px;
      }
      .flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }
      .flex-col {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex-1 {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0%;
        -webkit-flex: 1 1 0%;
        flex: 1 1 0%;
      }
      .font-bold {
        font-weight: 700;
      }
      .leading-normal {
        line-height: 1.5;
      }
      .min-w-full {
        min-width: 100%;
      }
      .overflow-x-auto {
        overflow-x: auto;
      }
      .p-4 {
        padding: 1rem;
      }
      .w-full {
        width: 100%;
      }
      @media (min-width: 640px) {
        .sm\\:min-w-\\[50\\%\\] {
          min-width: 50%;
        }
      }
      @media (min-width: 1024px) {
        .lg\\:min-w-\\[20\\%\\] {
          min-width: 20%;
        }
      }
    `
  }
}
