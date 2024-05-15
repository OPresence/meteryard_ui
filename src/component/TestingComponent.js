import React, { useState, useEffect } from "react";

function YourComponent() {
  const [selectedSubTypes, setSelectedSubTypes] = useState([]);
  console.log("selectedSubTypes--->", selectedSubTypes);
  // Function to handle checkbox change for a single subtype
  const handleCheckboxChange = (parentId, subTypeId) => {
    console.log("hdhdskjds");
    setSelectedSubTypes((prevState) => {
      const isAlreadySelected = prevState.some(
        (item) => item.parentId === parentId && item.subTypeId === subTypeId
      );

      if (isAlreadySelected) {
        return prevState.filter(
          (item) =>
            !(item.parentId === parentId && item.subTypeId === subTypeId)
        );
      } else {
        return [...prevState, { parentId, subTypeId }];
      }
    });
  };
  const uniqueParentIds = [];
  const uniqueSubTypeIds = [];
  useEffect(() => {
    selectedSubTypes.forEach((item) => {
      if (!uniqueParentIds.includes(item.parentId)) {
        uniqueParentIds.push(item.parentId);
      }
      if (!uniqueSubTypeIds.includes(item.subTypeId)) {
        uniqueSubTypeIds.push(item.subTypeId);
      }
    });

    console.log(uniqueParentIds);
    console.log(uniqueSubTypeIds);
    console.log(
      "uniqueParentIds------->",
      uniqueParentIds,
      "uniqueSubTypeIds------>",
      uniqueSubTypeIds
    );
  }, [selectedSubTypes]);

  // Sample JSON data
  const jsonData = [
    {
      status: "ACTIVE",
      _id: "65dc4b9cda234100342352b1",
      projectType: "Residential",
      createdAt: "2024-02-26T08:28:12.169Z",
      updatedAt: "2024-02-26T08:28:12.169Z",
      __v: 0,
      allProjectSubType: [
        {
          status: "ACTIVE",
          _id: "65dc4bc3da234100342352c2",
          projectSubType: "House",
          projectTypeId: "65dc4b9cda234100342352b1",
          createdAt: "2024-02-26T08:28:51.437Z",
          updatedAt: "2024-02-26T08:28:51.437Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4bdbda234100342352d6",
          projectSubType: "Villa",
          projectTypeId: "65dc4b9cda234100342352b1",
          createdAt: "2024-02-26T08:29:15.645Z",
          updatedAt: "2024-02-26T08:29:15.645Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4bebda234100342352dc",
          projectSubType: "Apartment",
          projectTypeId: "65dc4b9cda234100342352b1",
          createdAt: "2024-02-26T08:29:31.084Z",
          updatedAt: "2024-02-26T08:29:31.084Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4bf9da234100342352e7",
          projectSubType: "Plot",
          projectTypeId: "65dc4b9cda234100342352b1",
          createdAt: "2024-02-26T08:29:45.533Z",
          updatedAt: "2024-02-26T08:29:45.533Z",
          __v: 0,
        },
      ],
    },
    {
      status: "ACTIVE",
      _id: "65dc4c11da234100342352f4",
      projectType: "Commercial",
      createdAt: "2024-02-26T08:30:09.152Z",
      updatedAt: "2024-02-26T08:30:09.152Z",
      __v: 0,
      allProjectSubType: [
        {
          status: "ACTIVE",
          _id: "65dc4cd1da23410034235356",
          projectSubType: "Plot2",
          projectTypeId: "65dc4c11da234100342352f4",
          createdAt: "2024-02-26T08:33:21.832Z",
          updatedAt: "2024-02-26T08:33:21.832Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4cddda23410034235361",
          projectSubType: "Apartment2",
          projectTypeId: "65dc4c11da234100342352f4",
          createdAt: "2024-02-26T08:33:33.855Z",
          updatedAt: "2024-02-26T08:33:33.855Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4cebda2341003423536c",
          projectSubType: "Villa2",
          projectTypeId: "65dc4c11da234100342352f4",
          createdAt: "2024-02-26T08:33:47.927Z",
          updatedAt: "2024-02-26T08:33:47.927Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4cfdda23410034235377",
          projectSubType: "House2",
          projectTypeId: "65dc4c11da234100342352f4",
          createdAt: "2024-02-26T08:34:05.832Z",
          updatedAt: "2024-02-26T08:34:05.832Z",
          __v: 0,
        },
      ],
    },
    {
      status: "ACTIVE",
      _id: "65dc4c1eda234100342352fc",
      projectType: "Agriculture",
      createdAt: "2024-02-26T08:30:22.828Z",
      updatedAt: "2024-02-26T08:30:22.828Z",
      __v: 0,
      allProjectSubType: [
        {
          status: "ACTIVE",
          _id: "65dc4c50da23410034235311",
          projectSubType: "Plot1",
          projectTypeId: "65dc4c1eda234100342352fc",
          createdAt: "2024-02-26T08:31:12.318Z",
          updatedAt: "2024-02-26T08:31:12.318Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4c78da23410034235329",
          projectSubType: "Apartment1",
          projectTypeId: "65dc4c1eda234100342352fc",
          createdAt: "2024-02-26T08:31:52.708Z",
          updatedAt: "2024-02-26T08:31:52.708Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4c8fda2341003423533c",
          projectSubType: "Villa1",
          projectTypeId: "65dc4c1eda234100342352fc",
          createdAt: "2024-02-26T08:32:15.683Z",
          updatedAt: "2024-02-26T08:32:15.683Z",
          __v: 0,
        },
        {
          status: "ACTIVE",
          _id: "65dc4cbcda2341003423534b",
          projectSubType: "House1",
          projectTypeId: "65dc4c1eda234100342352fc",
          createdAt: "2024-02-26T08:33:00.942Z",
          updatedAt: "2024-02-26T08:33:00.942Z",
          __v: 0,
        },
      ],
    },
  ];

  return (
    <div>
      {/* Map through your project types */}
      {jsonData.map((projectType) => (
        <div key={projectType._id}>
          <h3>{projectType.projectType}</h3>
          {/* Checkbox for "check all" */}
          <label>
            <input
              type="checkbox"
              // onChange={() =>
              //   handleCheckAll(projectType._id, projectType.allProjectSubType)
              // }
            />
            Check All
          </label>
          {/* Map through the subtypes of this project type */}
          {projectType.allProjectSubType.map((subType) => (
            <div key={subType._id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSubTypes.some(
                    (item) =>
                      item.parentId === projectType._id &&
                      item.subTypeId === subType._id
                  )}
                  onChange={() =>
                    handleCheckboxChange(projectType._id, subType._id)
                  }
                />
                {subType.projectSubType}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
