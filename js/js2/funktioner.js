// Opgave2
import React from "react";

export default function TestInstructions() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-2xl font-mono text-sm">
      <p>
        Organisér dine tests i grupper med <span className="text-blue-400">describe</span>. Brug{" "}
        <span className="text-purple-400">beforeEach</span> til at opsætte testdata og{" "}
        <span className="text-green-400">afterEach</span> til at rydde op.
      </p>
    </div>
  );
}