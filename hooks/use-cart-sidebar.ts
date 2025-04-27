import { usePathname } from "next/navigation";
import useCartStore from "./use-cart-store";
import useDeviceType from "./use-device-type";

const isNotInPaths = (s: string) =>
  // Here we are checking if the current path is not one of the specified paths
  !/^\/$|^\/cart$|^\/checkout$|^\/sign-in$|^\/sign-up$|^\/order(\/.*)?$|^\/account(\/.*)?$|^\/admin(\/.*)?$/.test(
    s
  );
function useCartSidebar() {
  const {
    cart: { items },
  } = useCartStore();
  const deviceType = useDeviceType();
  const currentPath = usePathname();

  return (
    /* Here we are checking if items length is greater than 0
    and device type is desktop and current path is not one of the specified paths */
    items.length > 0 && deviceType === "desktop" && isNotInPaths(currentPath)
  );
}

export default useCartSidebar;
