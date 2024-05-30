import {
  faPeopleRoof,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FLOOR_TYPE = [
  {
    id: 1,
    name: "Wood",
    key: "wood",
  },
  {
    id: 2,
    name: "Carpet",
    key: "carpet",
  },
];

const GLASS_TYPE = [
  {
    id: 1,
    name: "Tempered",
    key: "tempered",
  },
  {
    id: 2,
    name: "Double Glazed",
    key: "double_glazed",
  },
  {
    id: 3,
    name: "Triple Glazed",
    key: "triple_glazed",
  },
];
const ROOM_TYPE = [
  {
    id: 1,
    name: "Bedroom",
    key: "bedroom",
  },
  {
    id: 2,
    name: "Kitchen",
    key: "kitchen",
  },
  {
    id: 3,
    name: "Lounge",
    key: "lounge",
  },
  {
    id: 4,
    name: "Bathroom",
    key: "bathroom",
  },
  {
    id: 5,
    name: "Diner",
    key: "diner",
  },
  {
    id: 6,
    name: "Office",
    key: "office",
  },
];

const WINDOW_STYLE = [
  {
    id: 1,
    name: "Bay",
    key: "bay",
  },
  {
    id: 2,
    name: "Flat",
    key: "flat",
  },
  {
    id: 3,
    name: "Full Height",
    key: "full_height",
  },
];

const WINDOW_TYPE = [
  {
    id: 1,
    name: "Single Hung Window",
    key: "single_hung",
  },
  {
    id: 2,
    name: "Double Hung Window",
    key: "double_hung",
  },
  {
    id: 3,
    name: "Picture Window",
    key: "picture",
  },
  {
    id: 4,
    name: "Casement Window",
    key: "casement",
  },
  {
    id: 4,
    name: "Awning Window",
    key: "awning",
  },
];

const FOUNDATION_TYPE = [
  {
    id: 1,
    value: "brick",
    icon: <FontAwesomeIcon icon={faTrowelBricks} size="2x" />,
    description:
      "A brick foundation is a foundation built from red brick and mortar. Brick foundations were the most common way of building houses over 100 years ago.",
  },
  {
    id: 2,
    value: "slab",
    icon: <FontAwesomeIcon icon={faTrowelBricks} size="2x" />,
    description:
      'A slab foundation is made of concrete that is typically 4" to 6" thick in the center. Houses built on a slab lack crawlspaces, and there is no space under the floor.',
  },
  {
    id: 3,
    value: "concrete",
    icon: <FontAwesomeIcon icon={faTrowelBricks} size="2x" />,
    description:
      "A concrete foundation is a large, heavy lair, or slab of concrete that is ordinarily 4-6 inches wide in the innermost and cascaded directly on the ground all at one time.",
  },
];

const ROOF_TYPE = [
  {
    id: 1,
    value: "thatch",
    icon: <FontAwesomeIcon icon={faPeopleRoof} size="2x" />,
    description:
      "A thatched roof is made from straw or reeds. Thatch is also a natural insulator, and air pockets within straw thatch insulate a building in both warm and cold weather.",
  },
  {
    id: 2,
    value: "flat",
    icon: <FontAwesomeIcon icon={faPeopleRoof} size="2x" />,
    description:
      "A flat roof is a roof which is almost level in contrast to the many types of sloped roofs. Flat roofs are an ancient form mostly used in arid climates and allow the roof space to be used as a living space or a living roof.    ",
  },
  {
    id: 3,
    value: "tiled",
    icon: <FontAwesomeIcon icon={faPeopleRoof} size="2x" />,
    description:
      "Tiled roof will never decay and are resistant to insect damage and rot. Tiles are made from earth minerals rather than chemicals, which means they can be ground up and reused when they are removed. ",
  },
];

export {
  GLASS_TYPE,
  FLOOR_TYPE,
  WINDOW_STYLE,
  WINDOW_TYPE,
  ROOM_TYPE,
  FOUNDATION_TYPE,
  ROOF_TYPE,
};
