import React from "react";

export default function Copyright() {
  return (
    <div className="text-center py-10 border-t text-sm">
      Copyright &copy; {new Date().getFullYear()} All rights reserved.
    </div>
  );
}
