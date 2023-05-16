import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Select from "./App";

describe('<EnhancedSelect />', () => {
  it("renders the landing page", async () => {
    expect.assertions(1)
    const user = userEvent.setup()
    render(<Select />);
    await user.click(screen.getByTestId('Select-Field'))
    expect(screen.getByTestId('Select-Popup')).toBeVisible()
  });
})
