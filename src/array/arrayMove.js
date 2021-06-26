

export function arrayMove(list, oldIndex, newIndex) {
    const tmp = list[oldIndex];
    list.splice(oldIndex, 1);
    list.splice(newIndex, 0, tmp);

    return list;
}

