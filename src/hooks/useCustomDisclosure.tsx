import { useDisclosure } from '@mantine/hooks'

const useCustomDisclosure = () => {
    const [opened, { open, close }] = useDisclosure()
    return { opened, open, close }
}

export default useCustomDisclosure;