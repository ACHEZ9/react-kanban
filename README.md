This PR is the submission of my Close take home assignment. 

**A quick outline/commentary on your UI and technical decisions with a self-critique.**

For the UI, I followed the [Figma spec](https://www.figma.com/file/u1J2vVSR38Js0na6MWAYKh/Frontend-Take-Home) as closely as possible. There are some additional updates I would make to various components and interactions given more time, as I will discuss further in the "What you would continue iterating on if you had more time" section.

I decided to use [styled-components](https://github.com/styled-components/styled-components) for the styling and theming in my project. I am very familiar and fond of the library, and felt that I could build components the quickest this way.

For state management, I went with [zustand](https://github.com/pmndrs/zustand). I had never used zustand before, but have been hearing about it for a bit and thought this was a good opportunity to test it out. I normally use [redux-toolkit](https://github.com/reduxjs/redux-toolkit) when an external state management approach is desired, but thought the simpler approach of zustand made for a good use case in this project. Zustand also includes a [`persist`](https://docs.pmnd.rs/zustand/integrations/persisting-store-data) middleware, which made persisting the state to localstorage very simple.

I stuck with the [hello-pangea/dnd](https://github.com/hello-pangea/dnd) library for Drag-and-Drop interactions. It made adding the functionality fairly trivial.

**Screenshots/GIFs of your UI and interactions.**

![Screenshot 2024-05-07 at 9 14 30 AM](https://github.com/close-takehomes/frontend-AChesarone/assets/80048782/210b8d57-83cb-4809-8c43-4e26d39315e9)
![Screenshot 2024-05-07 at 9 14 53 AM](https://github.com/close-takehomes/frontend-AChesarone/assets/80048782/a29068bf-82de-4184-a144-285b4920e823)
![add_task](https://github.com/close-takehomes/frontend-AChesarone/assets/80048782/0f8d8ca6-8448-46c9-aa57-7d286ec1ae11)
![dnd](https://github.com/close-takehomes/frontend-AChesarone/assets/80048782/045daf51-672f-4b99-ac2b-18636e4a3bcd)
![tab-sync](https://github.com/close-takehomes/frontend-AChesarone/assets/80048782/bc1d01c7-c642-4a89-aff7-5f7b68597563)



**What tests you performed.**

I performed general manual testing of the various features, ensuring to attempt to capture edge cases. For example I tested:
- Adding a new Task, with required fields and without.
- Reloading page to ensure persisted to localstorage.
- Cross-tab syncing.
- Drag and Drop functionality.
- Gravatar image loading with known/unknown emails.

I also added a few tests, though would add more if I had more time (see below). I focused on what I thought were the most 'complex' function, `reorder` and `move`. I added a single test for each, though testing different scenarios of these functions should be added (for example, adding/removing from beginning and end of arrays, moving to empty arrays, etc.)

**What you would continue iterating on if you had more time.**

There are a few areas I would continue iterating on if I had more time:

- UI - I tried to capture a few small interactions in the Components, for example `hover` state of buttons, but there are additional UI/UX improvements I would make. Some examples are:
    - The 'Add Task' button does not have any feedback. It also might be nice to `rotate` the icon to a close icon to allow closing the 'Task Form' from there as well. I found myself expecting that would toggle open/close the form.
    - The 'Task Form' pops in and out, a transition would be nice.
    - There are no UI updates when dragging Items, the `dnd` library provides some state that would allow us to alter the styles of both the `Lane` on drag over and the `Task` when it is being dragged.
    - The 100 Tasks/Lane limit does not provide any feedback to the user. A toast or some form of message would be useful.

- State Management - I took a simple approach of storing the Lanes and Tasks in arrays. When wanting to find a Lane by Id, this means I need to iterate over the array to get the correct Lane. Not a big performance issue, as there are 3 items in the array, but a potential improvement would be to store the Ids of the Lanes in an array, and then have another object that keys Lane Ids to the Lanes.

- Tests - Add additional tests to the current `move` and `reorder` tests, to capture edge cases. Add additional UI test to various components, specifically those with interactivity (`TaskForm`).

**How much time you spent on the Take-Home.**

I spent about 6 hours on the Take-Home, which was the time recommended in the email.
