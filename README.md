 #                                 Project Overview:
-        Users can view 12 data cards representing donation campaigns.
-        Cards have four categories: Health, Education, Clothing, and Food.

- # Dynamic Routing:
    - Each card is linked to another page dynamically.
    - When a user clicks on a card, he will be redirected to a page displaying a larger version of the card's  with  image, title, and description.
    - A "Donate" button is available on this page.

- # Donation Functionality:(use of local storage)
    - Clicking the "Donate" button saves the card's information to another page using local storage.
    - Users can donate to campaigns by clicking this button.

- # Statistical Page:(dynamic pie-chart)
    - The site includes a statistical page.It features a dynamic pie chart that depends on the total amount a user can donate and the amount they have donated.
    - The chart has a red zone indicating the remaining amount the user can donate and a green zone showing the amount donated, both updated dynamically.

- # Category Search:
    - There is a category search button. Users can search for a specific category (e.g., "Health," "Education," "Clothing," or "Food").
    - If the category is present, relevant cards are displayed.
    - If not, the page resets to its previous state, showing all data cards, and a sweet alert or notification is shown to inform the user.
