import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();
  return (
    <>
      <div>Organization Page</div>
      <div>Organization: {orgId}</div>
    </>
  );
};

export default OrganizationIdPage;
