import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const projects = [
    {
      _id: '01',
      title: 'پروژه اول',
      category: {title: "برنامه نویسی", day: '03'},
      budget: '200000',
      deadline: '2023/04/24',
      tags: ["برنامه نویسی", "طراحی", "طراحی سایت"],
      freelancer: "نام تستی",
      status: "OPEN"
    },
    {
      _id: '02',
      title: 'طراحی و برنامه نویسی',
      category: {title: "برنامه نویسی", day: '03'},
      budget: '400000',
      deadline: '2023/10/04',
      tags: ["برنامه نویسی", "طراحی", "طراحی سایت"],
      freelancer: "نام تستی",
      status: "CLOSE"
    },
    {
      _id: '03',
      title: 'طراحی رابط کاربری',
      category: {title: "طراحی", day: '03'},
      budget: '250000',
      deadline: '2024/02/12',
      tags: ["برنامه نویسی", "طراحی", "طراحی سایت"],
      freelancer: "نام تستی",
      status: "OPEN"
    } 
  ];
  const { isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;

  // if (projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        </Table.Header>
      <Table.Body>
      {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
      </Table>
  );
}
export default ProjectTable;
