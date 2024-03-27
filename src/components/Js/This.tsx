import { FC } from "react";

const This: FC = () => {
  const userService = {
    currentFilter: "active",
    users: [
      { name: "John", status: "active" },
      { name: "Joseph", status: "deleted" },
    ],
    getFilteredUsers: function () {
      return this.users.filter(function (user) {
        // @ts-ignore
        return user.status === this.currentFilter;
      });
    },
    getFilteredUsersFix: function () {
      return this.users.filter((user) => {
        // @ts-ignore
        return user.status === this.currentFilter;
        // если с 'use strict' this - undefined, so an error
        // если без 'use strict' - то []
      });
    },
  };

  const res = userService.getFilteredUsersFix();
  console.log(res);

  return (
    <div>
      Js this
      <div>
        {res.map((re) => (
          <div key={re.name}>
            {re.name} {re.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export { This };
